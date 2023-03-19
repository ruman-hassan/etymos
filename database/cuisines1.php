<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuisines</title>
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <header>
        <a class="logo" href="etymos.php" title="Home">
            <img src="css/logo.png" alt="Logo" />
        </a>
    </header>
    <form action="cuisines1.php" method="get">

        <fieldset>
            <?php
            include 'database/db.php';
            

            //get the number of questions

            $count = count($array_cuis);


            // Loop through all words
            for ($i = 0; $i < $count; $i++) {


                //retrieve choices, first add the word in question
                $choices = array($array_cuis[$i]); 

                //choose 2 random choices from the array
                for ($j = 0; $j <2; $j++) {
                    $random_numbers[] = rand(0, $count);
                }

                //append new choices
                foreach ($random_numbers as $ran) {
                    $choices[] = $array_cuis[$ran];
                }

                //shuffle the choices
                shuffle($choices);

                // Display the question and answer choices
                echo "<div class='question'>";
                echo "<h3>Question</h3>";
                echo '<p>' . define_word($array_cuis[$i]) . '</p>';
                echo "<ul>";
                foreach ($choices as $choice) {
                    echo "<li><input type='radio' name='answer-$i' value='$choice' > $choice</li>";
                }
                echo "</ul>";
                echo "</div>";

               
            }


            ?>
            <div class="submit-section">
                <button id='submit' type="submit" value="Submit" class="btn btn-primary">Next</button>
                <a class="btn btn-primary" href="modules.php">Modules</a>
            </div>

        </fieldset>
    </form>


</body>

</html>