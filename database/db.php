<?php

require '.env'

$conn = mysqli_connect("localhost", "root", "", "etymos");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}


function define_word($word)
{
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.wordnik.com/v4/word.json/{$word}/definitions?limit=200&partOfSpeech=noun&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key={$API_KEY}",
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_RETURNTRANSFER => true
    ]);

    $response = curl_exec($curl);
    curl_close($curl);

    // Decode JSON response
    $data = json_decode($response, true);

    // Extract value of 'text' key
    if (!empty($data) && isset($data[0]['text'])) {
        $text = $data[0]['text'];
        echo $text;
    } else {
        echo 'Error: Unable to retrieve definition.';
    }
}
