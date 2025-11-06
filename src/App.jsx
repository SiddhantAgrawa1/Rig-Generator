import { useState } from 'react'
import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Button,
  CloseButton,
  Text,
  Heading,
} from '@chakra-ui/react'
import appConfig from './config/appConfig'
import generateHtmlTemplate from './config/htmlTemplate'

function Navbar() {
  return (
    <Box
      bg="worldline.500"
      color="white"
      py={4}
      px={6}
      boxShadow="sm"
    >
      <HStack spacing={2}>
        <Text fontSize="20px">🌐</Text>
        <Heading size="md">Worldline</Heading>
      </HStack>
    </Box>
  )
}

function CustomAlert({ status, message, onClose }) {
  const statusConfig = {
    success: {
      bg: '#f0faf8',
      borderColor: '#00a651',
      color: '#004d29',
      icon: '✅',
    },
    error: {
      bg: '#fff5f5',
      borderColor: '#e53e3e',
      color: '#c53030',
      icon: '❌',
    },
    warning: {
      bg: '#fffaf0',
      borderColor: '#d69e2e',
      color: '#c05621',
      icon: '⚠️',
    },
  }

  const config = statusConfig[status] || statusConfig.success

  return (
    <Box
      bg={config.bg}
      borderLeft="4px solid"
      borderColor={config.borderColor}
      color={config.color}
      p={3}
      borderRadius="md"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <HStack spacing={2} flex="1">
        <Text fontSize="lg">{config.icon}</Text>
        <Text fontSize="sm">{message}</Text>
      </HStack>
      <CloseButton
        size="sm"
        onClick={onClose}
      />
    </Box>
  )
}

function App() {
  const [formData, setFormData] = useState({
    programName: '',
    applicationName: '',
    versionNumber: '',
  })

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const programOptions = appConfig.getAllPrograms()

  const applicationOptions = formData.programName
    ? appConfig.getApplicationsByProgram(formData.programName)
    : []

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === 'programName') {
      setFormData({
        ...formData,
        [name]: value,
        applicationName: '',
      })
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const showAlert = (message, type = 'success') => {
    setAlert({
      show: true,
      message,
      type,
    })
    setTimeout(() => {
      setAlert({ show: false, message: '', type: 'success' })
    }, 4000)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.programName) {
      newErrors.programName = 'Program name is required'
    }
    if (!formData.applicationName) {
      newErrors.applicationName = 'Application name is required'
    }
    if (!formData.versionNumber.trim()) {
      newErrors.versionNumber = 'Version number is required'
    } else if (!/^\d+\.\d+\.\d+/.test(formData.versionNumber.trim())) {
      newErrors.versionNumber = 'Version should be in format X.X.X (e.g., 11.0.3)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const downloadFile = () => {
    if (!validateForm()) {
      showAlert('Please fill in all required fields correctly', 'error')
      return
    }

    const { programName, applicationName, versionNumber } = formData

    // Get all required data from config
    const appIdentifier = appConfig.getAppIdentifier(programName, applicationName)
    const environments = appConfig.getProgramEnvironments(programName)
    const deployCommand = appConfig.getDeployCommand(applicationName)
    const rollbackCommand = appConfig.getRollbackCommand(applicationName)

    if (!appIdentifier) {
      showAlert('Invalid program or application configuration', 'error')
      return
    }

    setLoading(true)

    setTimeout(() => {
      try {
        // Generate HTML with all dynamic data
        const htmlContent = generateHtmlTemplate(
          programName,
          applicationName,
          versionNumber,
          appIdentifier,
          environments,
          deployCommand,
          rollbackCommand
        )

        const element = document.createElement('a')
        element.setAttribute(
          'href',
          'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent)
        )
        element.setAttribute(
          'download',
          `${applicationName}_${programName}_v${versionNumber}.html`
        )
        element.style.display = 'none'

        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)

        setLoading(false)
        showAlert(
          `Downloaded: ${applicationName}_${programName}_v${versionNumber}.html`,
          'success'
        )

        setFormData({
          programName: '',
          applicationName: '',
          versionNumber: '',
        })
      } catch (error) {
        setLoading(false)
        showAlert(`Error: ${error.message}`, 'error')
      }
    }, 500)
  }

  return (
    <>
      <Navbar />

      <Box minH="calc(100vh - 80px)" bg="#f9f9f9" py={8} px={4}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          p={6}
          w="100%"
          maxW="450px"
          mx="auto"
        >
          <VStack spacing={5}>
            {/* Header */}
            <VStack spacing={1} w="100%" pb={4} borderBottom="1px solid #e5e7eb">
              <Heading size="md" color="worldline.900">
                Configuration Generator
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Generate deployment configuration files
              </Text>
            </VStack>

            {/* Alert */}
            {alert.show && (
              <Box w="100%">
                <CustomAlert
                  status={alert.type}
                  message={alert.message}
                  onClose={() =>
                    setAlert({ show: false, message: '', type: 'success' })
                  }
                />
              </Box>
            )}

            {/* Form */}
            <VStack spacing={4} w="100%">
              {/* Program Name */}
              <FormControl isInvalid={!!errors.programName}>
                <FormLabel fontSize="sm" fontWeight="500">
                  Program Name
                </FormLabel>
                <Select
                  name="programName"
                  value={formData.programName}
                  onChange={handleInputChange}
                  placeholder="Select Program"
                  size="sm"
                  bg="worldline.100"
                  borderColor="gray.300"
                >
                  {programOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                {errors.programName && (
                  <FormErrorMessage fontSize="xs">{errors.programName}</FormErrorMessage>
                )}
              </FormControl>

              {/* Application Name */}
              <FormControl isInvalid={!!errors.applicationName}>
                <FormLabel fontSize="sm" fontWeight="500">
                  Application Name
                </FormLabel>
                <Select
                  name="applicationName"
                  value={formData.applicationName}
                  onChange={handleInputChange}
                  placeholder={
                    formData.programName ? 'Select Application' : 'Select Program First'
                  }
                  isDisabled={!formData.programName}
                  size="sm"
                  bg="worldline.100"
                  borderColor="gray.300"
                >
                  {applicationOptions.map((appName) => (
                    <option key={appName} value={appName}>
                      {appName}
                    </option>
                  ))}
                </Select>
                {errors.applicationName && (
                  <FormErrorMessage fontSize="xs">{errors.applicationName}</FormErrorMessage>
                )}
              </FormControl>

              {/* Version Number */}
              <FormControl isInvalid={!!errors.versionNumber}>
                <FormLabel fontSize="sm" fontWeight="500">
                  Version Number
                </FormLabel>
                <Input
                  name="versionNumber"
                  type="text"
                  value={formData.versionNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 11.0.3"
                  size="sm"
                  bg="worldline.100"
                  borderColor="gray.300"
                />
                {errors.versionNumber ? (
                  <FormErrorMessage fontSize="xs">{errors.versionNumber}</FormErrorMessage>
                ) : (
                  <FormHelperText fontSize="xs">
                    Format: X.X.X (e.g., 11.0.3)
                  </FormHelperText>
                )}
              </FormControl>

              {/* Download Button */}
              <Button
                w="100%"
                bg="worldline.500"
                color="white"
                size="sm"
                isLoading={loading}
                loadingText="Generating..."
                onClick={downloadFile}
                _hover={{
                  bg: 'worldline.600',
                }}
              >
                Download Configuration
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default App