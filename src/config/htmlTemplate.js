/**
 * HTML Template Generator
 * Generates the HTML content with dynamic configuration
 */

const generateHtmlTemplate = (
  programName,
  applicationName,
  versionNumber,
  appIdentifier,
  environments,
  deployCommand,
  rollbackCommand
) => {
  // Generate environment list HTML
  const environmentsHtml = environments
    .map(
      (env) =>
        `<li><strong>${env.name}</strong> (<em>${appIdentifier}</em>): ${env.servers.join(', ')}</li>`
    )
    .join('\n')

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<script>
  function copy(btn) {
    var lst = btn.parentNode.childNodes;
    var txt = '';
    for (var i = 0; i < lst.length; i++) {
      if (lst[i].nodeName.toUpperCase() === 'CODE') {
        txt += lst[i].textContent;
      }
    }
    var elt = document.createElement('input');
    elt.value = txt.replace(/[\\n\\r]+/g, '').trim();
    document.body.appendChild(elt);
    elt.select();
    document.execCommand('copy');
    document.body.removeChild(elt);
    alert('Copied to clipboard!');
  }
</script>
<title>${programName} - ${applicationName} v${versionNumber}</title>
<style>
  body { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    line-height: 1.6; 
    margin: 0; 
    padding: 0;
    background: linear-gradient(135deg, #f0faf8 0%, #f5f5f5 100%);
    min-height: 100vh;
  }
  .container { 
    max-width: 900px; 
    margin: 0 auto; 
    background: white; 
    padding: 40px; 
    border-radius: 8px; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h1 { 
    color: #004d29; 
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  h2 { 
    color: #004d29;
    margin-top: 30px;
    font-size: 18px;
  }
  h3 { 
    color: #00a651;
    font-size: 16px;
  }
  code { 
    background-color: #f0faf8; 
    padding: 2px 6px; 
    border-radius: 3px; 
    font-family: 'Courier New', monospace;
    color: #004d29;
  }
  pre { 
    background-color: #f0faf8; 
    padding: 15px; 
    border-radius: 5px; 
    overflow-x: auto;
    border-left: 2px solid #00a651;
  }
  button { 
    background-color: #00a651; 
    color: white; 
    border: none; 
    padding: 8px 12px; 
    cursor: pointer; 
    border-radius: 4px; 
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  button:hover { 
    background-color: #009c47;
  }
  ul { 
    margin-left: 20px; 
  }
  li { 
    margin-bottom: 10px;
  }
  ol {
    margin-left: 20px;
  }
  ol li {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f0faf8;
    border-radius: 4px;
    border-left: 2px solid #00a651;
  }
  strong {
    color: #004d29;
  }
  em {
    color: #00a651;
  }
  a {
    color: #00a651;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
</head>
<body>

<div class="container">

<h1>${programName} - ${applicationName} v${versionNumber}</h1>

<h2>Environments</h2>
<ul>
${environmentsHtml}
</ul>

<h2>Deployment Procedure</h2>
<p>Apply following steps on every target machine, <strong>one machine at a time</strong>.</p>
<ol>
<li><button onclick="copy(this)">📋 Copy</button> Connect as applicative user:<br />
<code>sudo -iu wlsi</code></li>
<li><button onclick="copy(this)">📋 Copy</button> Deploy new version:<br />
<code>${deployCommand} ${versionNumber}</code></li>
</ol>

<h2>Rollback Procedure</h2>
<p>Apply following steps on every target machine, <strong>one machine at a time</strong>.</p>
<ol>
<li><button onclick="copy(this)">📋 Copy</button> Connect as applicative user:<br />
<code>sudo -iu wlsi</code></li>
<li><button onclick="copy(this)">📋 Copy</button> Rollback to an earlier deployment:<br />
<code>${rollbackCommand}</code></li>
</ol>
<p><em>(index 0 would be the very last deployment so in all likelihood, index 1 is what you want, but by all means do check the dates and/or versions!)</em></p>

<h2>Troubleshooting</h2>
<h3>Deploy command hangs</h3>
<p>CTRL-C then repeat the command at least once.</p>
<h3>Issues with deployment</h3>
<p>Contact the DevOps team for assistance.</p>

</div>

</body>
</html>`
}

export default generateHtmlTemplate