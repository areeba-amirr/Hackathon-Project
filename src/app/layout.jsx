import './globals.css';

export const metadata = {
  title: 'MediSnap',
  description: 'Snap. Understand. Stay Safe.',
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
