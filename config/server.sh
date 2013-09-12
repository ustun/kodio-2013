function server() {
    if [[ $1 == "-h" || $1 == "--help" ]]; then
        echo "usage:"
        echo -e "\tserver PORT"
        echo -e "\tserver # default port is 8000"
        echo
        echo "-h, --help: help"
        echo
        return 0
    fi
    local port="${1:-8000}"
    # open "http://localhost:${port}/"
    python -m SimpleHTTPServer "$port"
    python -c $'import SimpleHTTPServer;\n
                map = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\n
                map[""] = "text/plain";\n
                for key, value in map.items():\n\t
                map[key] = value + ";charset=UTF-8";\n
                SimpleHTTPServer.test();' "$port"
}
