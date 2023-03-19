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
    <form action="cuisines.php" method="get">

        <fieldset>
            <?php
            include 'database/db.php';


            //get the number of questions
            $qry_count = "SELECT word FROM words where category like 'foods'";
            $res_count = mysqli_query($conn, $qry_count);
            $word_count = mysqli_fetch_assoc($res_count);
            $count = count($word_count);


            // Loop through the questions
            for ($i = 1; $i <= $count; $i++) {
                // Get a random question from the database based on the selected category
                $query = "SELECT word FROM words where category like 'foods' ORDER BY RAND() limit 1  ";
                $result = mysqli_query($conn, $query);
                $row = mysqli_fetch_assoc($result);

                // Shuffle the answer choices
                $choices = array($row['word']);
                $query = "SELECT word FROM words where category like 'foods' and word != '{$row['word']}' ORDER BY RAND() LIMIT 2";
                $result = mysqli_query($conn, $query);
                while ($row_choice = mysqli_fetch_assoc($result)) {
                    $choices[] = $row_choice['word'];
                }
                shuffle($choices);

                // Display the question and answer choices
                echo "<div class='question'>";
                echo "<h3>Question</h3>";
                echo '<p>' . define_word($row['word']) . '</p>';
                echo "<ul>";
                foreach ($choices as $choice) {
                    echo "<li><input type='radio' name='answer-$i' value='$choice' > $choice</li>";
                }
                echo "</ul>";
                echo "</div>";

                // Check the answer
                if (isset($_POST["answer-$i"])) {
                    $answer = $_POST["answer-$i"];
                    if ($answer == $row['word']) {
                        $points++;
                    } else {
                        echo "<p class='wrong-answer'>Sorry, the correct answer is '{$row['word']}'.</p>";
                    }
                }
            }



            ?>
            <div class="submit-section">
                <button id='submit' type="submit" value="Submit" class="btn btn-primary">Next</button>
                <a class="btn btn-primary"  href="modules.php">Modules</a>
            </div>

        </fieldset>
    </form>


</body>

</html>