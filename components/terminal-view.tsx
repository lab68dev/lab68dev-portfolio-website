export function TerminalView() {
  return (
    <div className="bg-black border-2 border-white p-4 font-mono text-xs space-y-2 brutalist-shadow">
      <div className="flex gap-2 mb-4">
        <div className="w-2 h-2 bg-white" />
        <div className="w-2 h-2 bg-white" />
        <div className="w-2 h-2 bg-white" />
      </div>
      <div className="text-white">
        <span className="opacity-50">root@lab68dev:~$</span> ls -la
        <br />
        <span className="opacity-50">drwxr-xr-x </span> .studio
        <br />
        <span className="opacity-50">drwxr-xr-x </span> .projects
        <br />
        <span className="opacity-50">-rw-r--r-- </span> manifest.json
        <br />
        <span className="opacity-50">root@lab68dev:~$</span> cat manifest.json
        <br />
        {`{ "mission": "think_code_test_ship", "status": "active" }`}
      </div>
    </div>
  )
}
