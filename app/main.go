package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/sumohammed/GzipMiddleWare"
)

var temp, err = template.ParseFiles("index.html")

// func redirect(w http.ResponseWriter, req *http.Request) {
// 	http.Redirect(w, req, "https://"+req.Host+req.URL.String(), http.StatusMovedPermanently)
// }

func main() {
	// mux := http.NewServeMux()
	http.HandleFunc("/", index)
	http.Handle("/public/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/index.html", index)
	http.Handle("/sw-modules.js", Nocache(http.FileServer(http.Dir("."))))
	http.Handle("/sw-nomodules.js", Nocache(http.FileServer(http.Dir("."))))
	http.Handle("/manifest.json", http.FileServer(http.Dir(".")))

	log.Println(http.ListenAndServe(":8080", new(GzipMiddleWare.MiddleWare)))

}

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	temp.Execute(w, "")
}

func Nocache(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "no-cache")
		h.ServeHTTP(w, r)
	}

	return http.HandlerFunc(fn)
}
