let appletDefinitions;

fetch("applets/applets.json")
    .then(response => response.json())
    .then(json => appletDefinitions = json);
