const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

function generateBuildInfo() {
  try {
    // Get git information
    let lastCommitDate = 'January 2025';
    let commitHash = '';
    
    try {
      // Get the last commit date in a nice format
      lastCommitDate = execSync('git log -1 --format=%cd --date=format:"%B %Y"', { 
        encoding: 'utf8' 
      }).trim();
      
      // Get short commit hash
      commitHash = execSync('git rev-parse --short HEAD', { 
        encoding: 'utf8' 
      }).trim();
    } catch (gitError) {
      console.log('Git not available, using fallback date');
    }

    const buildInfo = {
      lastUpdated: lastCommitDate,
      buildDate: new Date().toISOString(),
      commitHash: commitHash,
      timestamp: Date.now()
    };

    // Ensure the app directory exists
    const appDir = path.join(__dirname, '..', 'app');
    if (!fs.existsSync(appDir)) {
      fs.mkdirSync(appDir, { recursive: true });
    }

    // Write build info to a JSON file
    fs.writeFileSync(
      path.join(appDir, 'build-info.json'),
      JSON.stringify(buildInfo, null, 2)
    );

    console.log('✓ Build info generated:', buildInfo);
  } catch (error) {
    console.error('Error generating build info:', error);
    
    // Create a fallback build info
    const fallbackInfo = {
      lastUpdated: 'January 2025',
      buildDate: new Date().toISOString(),
      commitHash: '',
      timestamp: Date.now()
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', 'app', 'build-info.json'),
      JSON.stringify(fallbackInfo, null, 2)
    );
  }
}

generateBuildInfo(); 