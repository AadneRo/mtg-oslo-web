export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <p>© {date.getFullYear()} MTG Oslo. All rights reserved.</p>
    </footer>
  );
}
