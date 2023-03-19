<?php

$conn = mysqli_connect("localhost", "root", "", "etymos");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

// function get_words($category)
// {
//     $conn = mysqli_connect("localhost", "root", "", "etymos");
//     $query = "SELECT word FROM words where category like '{$category}'  ";
//     $result = mysqli_query($conn, $query);
//     $row = mysqli_fetch_assoc($result);

//     while ($row = mysqli_fetch_assoc($result)) {
//         $words_from_db[] = $row['word'];
//     }

//     return $words_from_db;
// }

// var_dump(get_words('couture'));

// $array_curr=[
//     0=>['kwacha'],
//     1=>['tambala'],
//     2=>['zaire']
// ];

// $array_cuis=[
//     0=>['couscous'],
//     1=>['injera'],
//     2=>['matoke']
// ];


// $array_cout=[
//     0=>['kitenge'],
//     1=>['dashiki'],
//     2=>['mitumba']
// ];


function define_word($word)
{
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.wordnik.com/v4/word.json/{$word}/definitions?limit=200&partOfSpeech=noun&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=nh1cb9m4yspcmwq687www9qn7j3ix3dmppv7a0ot4mn0bwr3v",
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
