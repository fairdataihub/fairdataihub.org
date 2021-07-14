<template>
  <section class="max-w-screen-lg mx-auto p-10">
    <div class="w-full flex flex-col">
      <h2
        class="
          font-sans font-bold
          text-2xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          py-4
          dark:text-gray-50
        "
      >
        Publications
      </h2>
    </div>

    <div class="dark:text-gray-50 flex flex-col">
      <div
        class="flex flex-col mb-5"
        v-for="item in publicationsList"
        :key="item.doi"
      >
        <p class="font-semibold text-xl">
          {{ item.title }}
        </p>
        <p class="text-xl sm:text-base my-1">
          {{ item.authors }}
        </p>
        <p class="text-xl sm:text-sm my-1">
          Date: {{ item.date }}, doi: {{ item.doi }}
        </p>
        <div class="bg-gray-100 rounded p-3 my-3 relative">
          {{ item.citation }}
          <button
            class="
              absolute
              rounded-lg
              bottom-2
              right-2
              bg-gray-100
              hover:bg-gray-200
              p-1
            "
            @click="copyToClipboard(item.onelinecitation)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SodasparcPublications",
  data() {
    return {
      publicationsList: [
        {
          title:
            "SPARC Data Structure: Rationale and Design of a FAIR Standard for Biomedical Research Data",
          authors:
            "Anita Bandrowski, Jeffrey S. Grethe, Anna Pilko, Tom Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeigler, Maryann E. Martone",
          doi: "https://doi.org/10.1101/2021.02.10.430563",
          date: "March, 2021",
          citation: `Anita Bandrowski, Jeffrey S. Grethe, Anna Pilko, Tom Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeigler, Maryann E. Martone
          bioRxiv 2021.02.10.430563; doi: https://doi.org/10.1101/2021.02.10.430563`,
          onelinecitation:
            "Anita Bandrowski, Jeffrey S. Grethe, Anna Pilko, Tom Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeigler, Maryann E. Martone. bioRxiv 2021.02.10.430563; doi: https://doi.org/10.1101/2021.02.10.430563",
        },
        {
          title:
            "SPARC: SODA, an interactive software for curating SPARC datasets",
          authors:
            "Bhavesh Patel, Harshit Srivastava, Parya Aghasafari, Karl Helmer",
          doi: "https://doi.org/10.1096/fasebj.2020.34.s1.02483",
          date: "April 2020",
          citation: `Patel, Bhavesh, Harshit Srivastava, Parya Aghasafari, and Karl Helmer. "SPARC: SODA, an interactive software for curating SPARC datasets." 
          The FASEB Journal 34, no. S1 (2020): 1-1.`,
          onelinecitation:
            'Patel, Bhavesh, Harshit Srivastava, Parya Aghasafari, and Karl Helmer. "SPARC: SODA, an interactive software for curating SPARC datasets. The FASEB Journal 34, no. S1 (2020): 1-1.',
        },
      ],
    };
  },
  methods: {
    copyToClipboard(citation) {
      writeToClipboard(citation);
    },
  },
};

const writeToClipboard = (citation) => {
  navigator.clipboard.write(citation);
};
</script>

<style></style>
