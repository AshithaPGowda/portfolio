import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "Ashitha Paramesha Gowda",
  description: "Get to Know me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
