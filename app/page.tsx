import resumeHtml from "../public/resume.html?raw";

// One editable HTML source serves both the hosted page and the standalone file.
const content = resumeHtml.split("<!-- CV_START: The hosted page uses this same editable HTML. -->")[1].split("<!-- CV_END -->")[0];

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <script src="/script.js" async />
    </>
  );
}
