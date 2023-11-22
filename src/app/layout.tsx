import { Screen } from "@/components/Screen";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Screen.Root>
          <Screen.Content>
            <Screen.Body>{children}</Screen.Body>
          </Screen.Content>
        </Screen.Root>
      </body>
    </html>
  );
}
