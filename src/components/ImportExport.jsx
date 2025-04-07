import React from 'react';

const ImportExport = ({ onImport, onExport }) => {
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const todos = JSON.parse(e.target.result);
        onImport(todos);
      } catch (err) {
        alert('Gagal mengimpor data.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="file"
        accept="application/json"
        onChange={handleImport}
        className="text-sm"
      />
      <button
        onClick={onExport}
        className="px-4 py-2 border rounded text-sm"
      >
        📤 Export
      </button>
    </div>
  );
};

export default ImportExport;
