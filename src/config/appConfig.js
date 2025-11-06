/**
 * Application Configuration
 * Maps programs to their environments and servers
 * Applications are left empty - user will provide them
 */

const appConfig = {
  programs: [
    {
      id: 'skywalker',
      name: 'Skywalker',
      description: 'IL Skywalker (ACQEU)',
      applications: [
        'txn-fo-ipass-ACQEU',
        'sequence-service',
        'txn-foacqeu-archive'
      ],
      environments: [
        {
          name: 'DEV-ACQEU',
          servers: ['bdila0001ap.sys.meshcore.net'],
        },
        {
          name: 'INF-ACQEU',
          servers: ['btila0001ap.sys.meshcore.net'],
        },
        {
          name: 'FCT-ACQEU',
          servers: [
            'btila0031ap.sys.meshcore.net (master)',
            'btila0032ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'UAT-ACQEU',
          servers: [
            'btila0041ap.sys.meshcore.net (master)',
            'btila0042ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'MNT-ACQEU',
          servers: [
            'btila0011ap.sys.meshcore.net (master)',
            'btila0012ap.sys.meshcore.net (slave)',
            'stila0011ap.sys.meshcore.net (slave)',
            'stila0012ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRF-ACQEU',
          servers: [
            'btila0061ap.sys.meshcore.net (master)',
            'btila0062ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PROD-ACQEU',
          servers: [
            'bpila0001ap.sys.meshcore.net (master)',
            'bpila0002ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRODS-ACQEU',
          servers: [
            'spila0001ap.sys.meshcore.net (slave)',
            'spila0002ap.sys.meshcore.net (slave)',
          ],
        },
      ],
    },
    {
      id: 'marcopolo',
      name: 'Marcopolo',
      description: 'IL Marcopolo (ACQAU)',
      applications: [
        'cmgt-apass-acqau',
        'sequence-service',
        'txn-extwatcher',
        'txn-fobot-apass-acqau',
        'txn-fobot-apass-mpap',
        'txn-keycontrol',
        'txn-keycontrol-22',
        'txn-scheme-exw',
        'txn-stni-archive-acqau',
        'txn-stni-datalake',
        'txn-stni-ft-dwh',
        'txn-stni-mbf'
      ],
      environments: [
        {
          name: 'DEV-ACQAU',
          servers: ['bdila3001ap.sys.meshcore.net'],
        },
        {
          name: 'INF-ACQAU',
          servers: ['btila3001ap.sys.meshcore.net'],
        },
        {
          name: 'FCT-ACQAU',
          servers: [
            'btila3031ap.sys.meshcore.net (master)',
            'btila3032ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'UAT-ACQAU',
          servers: [
            'btila3041ap.sys.meshcore.net (master)',
            'btila3042ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRF-ACQAU',
          servers: [
            'btila3061ap.sys.meshcore.net (master)',
            'btila3062ap.sys.meshcore.net (slave)',
            'btila3063ap.sys.meshcore.net (slave)',
            'btila3064ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PROD-ACQAU',
          servers: [
            'bpila3001ap.sys.meshcore.net (master)',
            'bpila3002ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRODS-ACQAU',
          servers: [
            'spila3001ap.sys.meshcore.net (slave)',
            'spila3002ap.sys.meshcore.net (slave)',
          ],
        },
      ],
    },
    {
      id: 'brexit',
      name: 'Brexit',
      description: 'IL ACQMS1',
      applications: [
        'cmgt-ipass-acqms1',
        'sequence-service',
        'txn-extwatcher-acqms1',
        'txn-fobot-ipass-acqms1',
        'txn-fobot-ms1-ipass-mpap',
        'txn-keycontrol-22-acqms1',
        'txn-keycontrol-22-acqms1-mpap',
        'txn-scheme-exw-acqms1',
        'txn-stni-archive-acqms1',
        'txn-stni-datalake-acqms1',
        'txn-stni-ft-dwh-acqms1',
        'txn-stni-bazar'
      ],
      environments: [
        {
          name: 'DEV-ACQMS1',
          servers: ['bdila1001ap.sys.meshcore.net'],
        },
        {
          name: 'INF-ACQMS1',
          servers: ['btila1001ap.sys.meshcore.net'],
        },
        {
          name: 'FCT-ACQMS1',
          servers: [
            'btila1031ap.sys.meshcore.net (master)',
            'btila1032ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'UAT-ACQMS1',
          servers: [
            'btila1041ap.sys.meshcore.net (master)',
            'btila1042ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRF-ACQMS1',
          servers: [
            'btila1061ap.sys.meshcore.net (master)',
            'btila1062ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'MNT-ACQMS1',
          servers: [
            'btila1063ap.sys.meshcore.net (master)',
            'btila1064ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PROD-ACQMS1',
          servers: [
            'bpila1001ap.sys.meshcore.net (master)',
            'bpila1002ap.sys.meshcore.net (slave)',
            'bpila1003ap.sys.meshcore.net (slave)',
            'bpila1004ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRODS-ACQMS1',
          servers: [
            'spila1001ap.sys.meshcore.net (slave)',
            'spila1002ap.sys.meshcore.net (slave)',
            'spila1003ap.sys.meshcore.net (slave)',
            'spila1004ap.sys.meshcore.net (slave)',
          ],
        },
      ],
    },
    {
      id: 'estey',
      name: 'Estey',
      description: 'IL Estey (ACQMS2)',
      applications: [
        'cmgt-ipass-acqms2',
        'sequence-service-ms2',
        'txn-extwatcher-acqms2',
        'txn-fobot-ipass-acqms2',
        'txn-keycontrol-22-acqms2',
        'txn-scheme-exw-acqms2',
        'txn-stni-archive-acqms2',
        'txn-stni-datalake-acqms2',
        'txn-stni-ft-dwh-acqms2'
      ],
      environments: [
        {
          name: 'DEV-ACQMS2',
          servers: ['bdila1001ap.sys.meshcore.net'],
        },
        {
          name: 'INF-ACQMS2',
          servers: ['btila1001ap.sys.meshcore.net'],
        },
        {
          name: 'FCT-ACQMS2',
          servers: [
            'btila1031ap.sys.meshcore.net (master)',
            'btila1032ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'UAT-ACQMS2',
          servers: [
            'btila2041ap.sys.meshcore.net (master)',
            'btila2042ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PROD-ACQMS2',
          servers: [
            'bpila2001ap.sys.meshcore.net (master)',
            'bpila2002ap.sys.meshcore.net (slave)',
            'bpila2003ap.sys.meshcore.net (slave)',
            'bpila2004ap.sys.meshcore.net (slave)',
          ],
        },
        {
          name: 'PRODS-ACQMS2',
          servers: [
            'spila2001ap.sys.meshcore.net (slave)',
            'spila2002ap.sys.meshcore.net (slave)',
            'spila2003ap.sys.meshcore.net (slave)',
            'spila2004ap.sys.meshcore.net (slave)',
          ],
        },
      ],
    },
    {
      id: 'paynetics',
      name: 'Paynetics',
      description: 'IL Paynetics (ACQFS1)',
      applications: [
        'cmgt-ipass-acqfs1',
        'sequence-service-acqfs1',
        'txn-extwatcher-acqfs1',
        'txn-fobot-ipass-acqfs1',
        'txn-stni-archive-acqfs1',
        'txn-stni-ft-dwh-acqfs1'
      ],
      environments: [
        {
          name: 'DEV-ACQFS1',
          servers: ['wlsiacqfs1-dev0101e1.wlsi.sb.eu.ginfra.net'],
        },
        {
          name: 'INF-ACQFS1',
          servers: [
            'wlsiacqfs1-inf0101e1.wlsi.sb.eu.ginfra.net (master)',
            'wlsiacqfs1-inf0101e2.wlsi.sb.eu.ginfra.net (slave)',
          ],
        },
        {
          name: 'FCT-ACQFS1',
          servers: [
            'wlsiacqfs1-fct0101e1.wlsi.sb.eu.ginfra.net (master)',
            'wlsiacqfs1-fct0101e2.wlsi.sb.eu.ginfra.net (slave)',
          ],
        },
        {
          name: 'UAT-ACQFS1',
          servers: [
            'wlsiacqfs1-uat0101e1.wlsi.pp.eu.ginfra.net (master)',
            'wlsiacqfs1-uat0101e2.wlsi.pp.eu.ginfra.net (slave)',
          ],
        },
        {
          name: 'PRF-ACQFS1',
          servers: [
            'wlsiacqfs1-prf0101e1.wlsi.pp.eu.ginfra.net (master)',
            'wlsiacqfs1-prf0101e2.wlsi.pp.eu.ginfra.net (slave)',
          ],
        },
        {
          name: 'PROD-ACQFS1',
          servers: [
            'wlsiacqfs1-prd0101e1.wlsi.pr.eu.ginfra.net (master)',
            'wlsiacqfs1-prd0102e1.wlsi.pr.eu.ginfra.net (slave)',
          ],
        },
        {
          name: 'PRODS-ACQFS1',
          servers: [
            'wlsiacqfs1-prd0101e2.wlsi.pr.eu.ginfra.net (slave)',
            'wlsiacqfs1-prd0102e2.wlsi.pr.eu.ginfra.net (slave)',
          ],
        },
      ],
    },
  ],

  /**
   * Get program by ID
   */
  getProgramById: function (programId) {
    return this.programs.find((p) => p.id === programId.toLowerCase())
  },

  /**
   * Get all program names
   */
  getAllPrograms: function () {
    return this.programs.map((p) => ({
      id: p.id,
      name: p.name,
    }))
  },

  /**
   * Get applications for a specific program
   * User can add applications to the program
   */
  getApplicationsByProgram: function (programId) {
    const program = this.getProgramById(programId)
    if (!program) return []
    return program.applications
  },

  /**
   * Get environments for a specific program
   */
  getEnvironmentsByProgram: function (programId) {
    const program = this.getProgramById(programId)
    if (!program) return []
    return program.environments
  },

  /**
   * Get app identifier (same as application name)
   */
  getAppIdentifier: function (programId, applicationName) {
    const program = this.getProgramById(programId)
    if (!program) return ''

    const exists = program.applications.find(
      (app) => app.toLowerCase() === applicationName.toLowerCase()
    )
    return exists ? applicationName : ''
  },

  /**
   * Get deploy command
   * Format: {appname}-deploy
   */
  getDeployCommand: function (applicationName) {
    return `${applicationName}-deploy`
  },

  /**
   * Get rollback command
   * Format: {appname}-rollback
   */
  getRollbackCommand: function (applicationName) {
    return `${applicationName}-rollback`
  },

  /**
   * Get program environments
   */
  getProgramEnvironments: function (programId) {
    const program = this.getProgramById(programId)
    return program ? program.environments : []
  },

  /**
   * Add application to a program
   * Usage: appConfig.addApplication('skywalker', 'txn-fo-ipass-ACQEU')
   */
  addApplication: function (programId, applicationName) {
    const program = this.getProgramById(programId)
    if (program && applicationName) {
      if (!program.applications.includes(applicationName)) {
        program.applications.push(applicationName)
        return true
      }
    }
    return false
  },

  /**
   * Remove application from a program
   */
  removeApplication: function (programId, applicationName) {
    const program = this.getProgramById(programId)
    if (program) {
      program.applications = program.applications.filter(
        (app) => app !== applicationName
      )
      return true
    }
    return false
  },

  /**
   * Get all applications across all programs
   */
  getAllApplications: function () {
    const allApps = new Set()
    this.programs.forEach((program) => {
      program.applications.forEach((app) => allApps.add(app))
    })
    return Array.from(allApps)
  },
}

export default appConfig