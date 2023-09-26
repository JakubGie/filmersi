import Patrons from "@/components/elements/patrons"
import MatchMovies from "@/components/matchMovies"


export async function generateMetadata({params}) {
    return {
      title: "Co obejrzeć z dziewczyną/chłopakiem? Znajdź film do obejrzenia",
      description: "Wybierzcie po jednym filmie, a my na ich podstawie pokażemy Wam nasze rekomendacje filmów do obejrzenia z dziewczyną/chłopakiem.",
      openGraph: {
        images: ['https://www.themoviedb.org/t/p/original/sUQgwo4oCgNVbpIq7ZtIUhF5hOe.jpg'],
        title: "Co obejrzeć z dziewczyną/chłopakiem? Znajdź film do obejrzenia",
        description: "Wybierzcie po jednym filmie, a my na ich podstawie pokażemy Wam nasze rekomendacje filmów do obejrzenia z dziewczyną/chłopakiem."
      },
    }
  }

const WhatWatchWithBfGf = () => {
    return (
        
          <MatchMovies/>
        

    )
}

export default WhatWatchWithBfGf