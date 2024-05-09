'use client';

export default function Resume() {
    const resumeClick = () => {
        'use client';
        const pdfUrl = "../../resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button className="bg-gradient-to-r from-pink-800 to-gray-900 text-white px-6 py-3 rounded-md ml-8" onClick={resumeClick}>Resume</button>

    )

}