const Entry = ({ importData, filter }) => {
  if (!importData) {
    return null; // Render nothing if importData is not available yet
  }

  if (importData.length === 0) {
    return (
      <p className="font-Poppins mx-auto py-9">
        We found<span className="font-bold"> nothing </span> matching{" "}
        <span className="font-bold">
          <br></br>
          {filter}
        </span>
      </p>
    );
  }
  console.log(importData);
  return (
    <div className="flex flex-col mt-4 w-full px-4 md:px-10 lg:px-12">
      {importData.map((item) => (
        <div
          className="flex flex-row justify-between items-center mb-4 border p-2 shadow-md lg:p-4 lg:shadow-lg lg:mb-8"
          key={item.story_id || item.points}
        >
          {/* Container für einzelne News mit Img in selber Reihe */}
          {console.log(item)}
          <div className="flex flex-col justify-start items-start">
            {/* Container für Title und Infos */}
            <a href={item.url}>
              <h4 className="text-lg font-bold font-Poppins md:text-2xl">
                {item.title || item.story_title}
              </h4>

              <small className="text-xs text-gray-600 font-Poppins lg:text-sm">
                posted{" "}
                {new Date(item.created_at_i * 1000).toLocaleDateString()} | by{" "}
                {item.author} |{" "}
                {item.num_comments > 0
                  ? item.num_comments + " comment(s)"
                  : ""}
              </small>
            </a>
          </div>
          <div className="flex justify-center items-center lg:w-[250px] w-16 h-16 mx-1 ">
            {/* Image Container */}
            <img
              src={
                item.url || item.story_url
                  ? `https://logo.clearbit.com/${
                      item.url
                        ? item.url.split("/")[2]
                        : item.story_url.split("/")[2]
                    }`
                  : "https://fakeimg.pl/90x60"
              }
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entry;
