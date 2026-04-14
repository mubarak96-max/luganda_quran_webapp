"use client";

interface DownloadAudioButtonProps {
  audioUrl: string;
  filename: string;
  className?: string;
}

export default function DownloadAudioButton({
  audioUrl,
  filename,
  className = "btn-primary",
}: DownloadAudioButtonProps) {
  const handleDownload = () => {
    const proxyUrl = `/api/download?url=${encodeURIComponent(audioUrl)}&filename=${encodeURIComponent(filename)}`;
    const link = document.createElement("a");
    link.href = proxyUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button type="button" className={className} onClick={handleDownload}>
      <i className="fas fa-download"></i> Download Audio
    </button>
  );
}
