import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,



  
}: {
  children: React.ReactNode
  
}) {
  return (
    <html lang="en">
      <body>
      {/* ===============================NAV BAR ============================= */}
<div className="wrapper">
  <div className="menu flex justify-left">
    <a href="/" className="active">Home</a>
    <a href="/flex">Flex</a>
    <a href="/grid">Grid</a>
    <a href="/signup">Signup</a>
    <a href="/wavyback">Wavy Background</a>
    
  </div>
</div>
{/* ===============================NAV BAR ============================= */}


{/* ============================ Wavy Header =============================== */}
<div className="main">
            <svg viewBox="60 60 1000 170">
                <path fill="#a2d9ff" fill-opacity="0.5" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,256C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099cc" fill-opacity="0.5" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,213.3C672,203,768,213,864,186.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,192L48,165.3C96,139,192,85,288,101.3C384,117,480,203,576,234.7C672,267,768,245,864,213.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <path fill="#0099ff" fill-opacity="0.2" d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,218.7C672,213,768,139,864,122.7C960,107,1056,149,1152,192C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>

{/* ============================ Wavy Header =============================== */}


{children}
      </body>
    </html>
  )
}