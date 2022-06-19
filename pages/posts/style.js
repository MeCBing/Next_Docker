import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        src="https://Jquery.js"
        onLoad={() => {
          $.ajax({
            // ...
          });
        }}
      />
    </>
  );
}