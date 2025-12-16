import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');
const port = 3000;

// Routes to prerender
const routes = [
  '/',
  '/about',
  '/appearances',
  '/contact',
  '/design-system',
  '/essays/the-imagination-gap-alt-text-ai',
  '/featured',
  '/figpie',
  '/international',
  '/legal',
  '/notes/webdev',
  '/page-not-found',
  '/studies',
  '/trig',
  '/work',
  '/work/genworth-canada',
  '/work/hellofresh',
  '/work/infomart',
  '/work/jib-design-and-advertising',
  '/work/mayo-clinic',
  '/work/philips-lighting',
  '/work/rbc',
  '/work/truenorth',
  '/work/uncharted-software',
];

// Simple HTTP server to serve the dist folder
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);
      
      // If it's a route (not a file), serve index.html
      if (!extname(filePath) && !existsSync(filePath)) {
        filePath = join(distDir, 'index.html');
      }
      
      // If file doesn't exist, serve index.html (for client-side routing)
      if (!existsSync(filePath)) {
        filePath = join(distDir, 'index.html');
      }
      
      const ext = extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
      }[ext] || 'application/octet-stream';
      
      if (existsSync(filePath)) {
        res.writeHead(200, { 'Content-Type': contentType });
        createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender...');
  
  // Check if dist directory exists
  if (!existsSync(distDir)) {
    console.error('Error: dist directory not found. Run "yarn build" first.');
    process.exit(1);
  }
  
  // Start local server
  const server = await startServer();
  
  try {
    // Launch browser
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    
    // Prerender each route
    for (const route of routes) {
      try {
        console.log(`Prerendering ${route}...`);
        
        const url = `http://localhost:${port}${route}`;
        await page.goto(url, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });
        
        // Wait a bit more for any dynamic content
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Get the HTML content
        const html = await page.content();
        
        // Determine output path
        let outputPath;
        if (route === '/') {
          outputPath = join(distDir, 'index.html');
        } else {
          // Create full directory structure for nested routes
          // e.g., /work/genworth-canada -> dist/work/genworth-canada/index.html
          const routePath = route.startsWith('/') ? route.slice(1) : route;
          const routeDir = join(distDir, routePath);
          if (!existsSync(routeDir)) {
            mkdirSync(routeDir, { recursive: true });
          }
          outputPath = join(routeDir, 'index.html');
        }
        
        // Write HTML file
        writeFileSync(outputPath, html);
        console.log(`✓ Saved ${outputPath}`);
      } catch (error) {
        console.error(`✗ Error prerendering ${route}:`, error.message);
      }
    }
    
    await browser.close();
    console.log('Prerender complete!');
  } catch (error) {
    console.error('Prerender failed:', error);
    process.exit(1);
  } finally {
    server.close();
  }
}

prerender();
