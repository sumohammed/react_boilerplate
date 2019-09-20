export const useShare = async (
  title,
  text,
  url,
  callback = () => console.log("Successful share")
) => {
  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: text,
        url: url
      })
      .then(() => callback())
      .catch(error => console.log("Error sharing", error));
  } else {
    // Here we use the WhatsApp API as fallback; remember to encode your text for URI
    location.href =
      "https://api.whatsapp.com/send?text=" +
      encodeURIComponent(text + " - ") +
      url;
    callback();
  }
};
