// Using a third party API that converts the RSS feed into JSON so that it can be parsed
google.load("feeds", "1");

function initialize() {
    const feed = new google.feeds.Feed("https://www.medicaldaily.com/rss");
    feed.load(function(result) {
        if (!result.error) {
          // Setting the maximum number of feeds to be returned
            const maxTopic = 7;
            // Declaring variables to append the HTML structure
            let healthTopic = document.getElementById("health-topic-row");
            let column = document.createElement("div");
            let ul = document.createElement("ul");
            column.classList.add("col-lg");
            ul.classList.add("custom-list");
            // A for loop that loops through all of the JSON data
            for (let i = 0; i < maxTopic; i++) {
                let entry = result.feed.entries[i];
                let div = document.createElement("li");
                let lineBreak = document.createElement("br");
                let span = document.createElement("span");
                let paragraph = document.createElement("p");
                span.innerText = (entry.title);
                paragraph.innerText = (entry.content);
                // Appends the elements into the list
                div.appendChild(span);
                div.appendChild(lineBreak);
                div.appendChild(paragraph);
                ul.appendChild(div);
                // Checks the topics to populate into two col-lg grids
                if (((i + 1) % 4) === 0 || (i + 1 === 7)) {
                    column.appendChild(ul);
                    healthTopic.appendChild(column);
                    column = document.createElement("div");
                    ul = document.createElement("ul");
                    column.classList.add("col-lg");
                    ul.classList.add("custom-list");
                }
            }
        }
    });
}
google.setOnLoadCallback(initialize);