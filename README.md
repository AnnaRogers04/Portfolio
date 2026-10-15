
# Bell Curve Random Generator Documentation

## How the code works

`BellCurveRandomGenerator` is a Unity script that rolls three dice and logs the results to the console. When the scene starts, Unity runs the `Start` method. It repeats a loop `sampleCount` times (10 by default), and each time round the loop it rolls a D6, a D12 and a D20, adds the three results into a total, and prints all four numbers with `Debug.Log`.

Each die is rolled by `GenerateBellCurveRandom`, which takes a minimum, a maximum and a peak. The D6 uses 1 to 6 with a peak of 2, the D12 uses 1 to 12 with a peak of 8, and the D20 uses 1 to 20 with a peak of 12. The method starts by picking a random number between 0 and 1. If the peak is exactly halfway between the minimum and maximum, it simply squares that number. Otherwise it splits the random number into two halves. A low number is squared and mapped onto the range from the minimum up to the peak, and a high number is squared and mapped onto the range from the peak up to the maximum, using `Mathf.Lerp`. Squaring the number is what weights the rolls instead of spreading them evenly.

Finally, the value is rounded to a whole number with `Mathf.RoundToInt` and clamped with `Mathf.Clamp` so it can never go below the minimum or above the maximum. That number is returned as the roll.
