import Link from "next/link";

export default function GoToLink({ path, text, className, ...props }) {
  return (
    <Link href={path} className={className} {...props}>
      {text}
    </Link>
  );
}
