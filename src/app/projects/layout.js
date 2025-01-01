
export const metadata = {
    title: "APG - My Work",
    description: "Example projects",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  