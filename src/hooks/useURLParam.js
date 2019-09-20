export const useParams = () => {
  Object.fromEntries =
    Object.fromEntries ||
    function(e) {
      for (
        var r, n = ("entries" in e) ? e.entries() : e, t = {};
        (r = n.next()) && !r.done;

      ) {
        var i = r.value;
        Object.defineProperty(t, i[0], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: i[1]
        });
      }
      return t;
    };

  const urlparams = new URLSearchParams(location.search);
  const obj = Object.fromEntries(urlparams);
  return obj;
};
