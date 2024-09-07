import Movies from "@/components/Movies";

const page = async ({ params }) => {
    const keyword = params.keyword;
    // console.log(keyword, "keyword");
  
    const apiKey = '56e027cd146687945044cba80958950c';
    console.log(apiKey, "API Key");
  
    const rest = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&include_adult=false`
    );
    const data = await rest.json();
    console.log(data.results);
  
    return (
      <div  >
        {!data.results ? (
          <div>Aranılan şey bulunamadı</div>
        ) : (
          <div className="flex flex-wrap gap-3 items-center justify-center ">
            {data.results.map((dt, key) => (
              <div
                className=" max-h-[300px] object-cover overflow-hidden  rounded-lg  "
                style={{ height: "300px", width: "470px"  }}
              >
                <Movies key={key} dt={dt} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  export default page;