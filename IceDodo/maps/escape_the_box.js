var map = {
    title: "Escape the Box",
    song: "env2",
    maker: "Awehero",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([6, 3, -53], [-1.57, 0, 0], [4, 6, 4], "d10404", 0, 0, 0.6, false, true, false, false);
        a.p([17, 0, -230], [0, 0, 0], [2, 30, 400], "00000a", 999999999, 0, 0, false, false, false, false);
        a.p([10, 5, -135], [0, 0, 0], [0.4, 10, 20], "00b000", 0, 0, 0, false, false, false, false);
        a.p([10, 5, -197], [0, 0, 0], [0.4, 10, 20], "9e00ff", 0, 0, 0, false, false, false, false);
        a.p([10, 5, -225], [0, 0, 0], [0.4, 10, 20], "ff3dd3", 0, 0, 0, false, false, false, false);
        a.p([-10, 5, -225], [0, 0, 0], [0.4, 10, 20], "ff3dd3", 0, 0, 0, false, false, false, false);
        a.p([29, -2, -14], [0, 0, -0.09], [40, 0.5, 8], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([54, -9.5, -386], [0, 0, 0], [70, 0.5, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([79, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([89, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([69, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([59, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([49, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([39, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([19, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([24, -4.5, -431], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([34, -4.5, -421], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([44, -4.5, -411], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([54, -4.5, -401], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([64, -4.5, -391], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([74, -4.5, -381], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([84, -4.5, -371], [0, 0, 0], [10, 10, 4], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([29, -4.5, -386], [0, 0, 0], [1, 10, 90], "ffffff", 0, 0, 0, false, false, false, false);
        a.p([54, -7, -161], [0, -0.02, 0], [10, 1, 280], "-1", 0, 0, 0, false, false, false, false);
        a.p([0, 2.59, -84.4], [0, -0.26, 0], [20, 7, 1], "ff6000", 0, 0, 0.1, false, false, false, false);
        a.p([-10, 5, -197], [0, 0, 0], [0.4, 10, 20], "9e00ff", 0, 0, 0, false, false, false, false);
        a.p([-10, 5, -135], [0, 0, 0], [0.4, 10, 20], "00b000", 0, 0, 0, false, false, false, false);
        a.p([0, 3.25, -240], [0, 0, 0], [20, 6, 10], "ff3dd3", 0, 0, 0, false, false, false, false);
        a.p([4, 0, -14], [0, 0, 0], [10, 0.5, 8], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -5], [0, 0, 0], [2, 0.5, 10], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -24], [0, 0, 0], [2, 0.5, 12], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([54, -6, -9.6], [0, -0.09, 0], [70, 12, 2], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([6, 0.01, -53], [0, 0, 0], [4, 0.5, 4], "-1", 0, 0, 0.6, true, false, false, false);
        a.p([54, -3.99, -15], [0, 0, 0], [1, 0.5, 4], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([53.14, -3.99, -15.94], [-0.79, 0, 0], [1, 0.5, 2], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -150], [0, 0, 0], [20, 6, 10], "0000ff", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 5, -165], [0, 0, 0.05], [0.4, 12, 20], "0000ff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -120], [0, 0, 0], [20, 6, 10], "00b000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1.6, -126.57], [0, 0.79, 0], [20, 8.4, 4], "00d300", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -135], [0, 0, 0], [20, 0.5, 20], "00d300", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -165], [0, 0, 0], [20, 0.5, 20], "00dcff", 0, 0, 0.6, false, false, false, false);
        a.p([-1.5, 5.81, -119], [0, 0, 0], [1, 0.4, 7], "00ff00", 0, 0, 0.6, false, true, false, false);
        a.p([0.13, 5.81, -124], [0, 0, 0], [2, 0.4, 2], "00ff00", 0, 0, 0.6, false, true, false, false);
        a.p([1.5, 5.81, -120.5], [0, 0, 0], [1, 0.4, 4], "00ff00", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -119], [0, 0, 0], [4, 0.4, 1], "00ff00", 0, 0, 0.6, false, true, false, false);
        a.p([0.13, 2.81, -127.91], [0, -0.79, 0], [2, 0.5, 8], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([3.84, 0.01, -143.16], [0.57, 0, 0], [2, 0.5, 6], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([2.05, 0.01, -137.51], [-1.02, 0, 0], [2, 0.5, 4], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([-0.2, 0.01, -135.17], [-0.47, 0, 0], [2, 0.5, 4], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([-0.44, 0.01, -132.25], [0.32, 0, 0], [2, 0.5, 4], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([4.44, 0.01, -139.95], [-0.53, 0, 0], [2, 0.5, 4], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([52.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([54, -9.44, -336], [0, 0, 0], [4, 0.4, 1], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([55.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4], "00ff00", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -150], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -153], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, true, false, false);
        a.p([1.5, 5.81, -151.5], [0, 0, 0], [1, 0.4, 4], "00ffff", 0, 0, 0.6, false, true, false, false);
        a.p([-1.5, 5.81, -148.5], [0, 0, 0], [1, 0.4, 4], "00ffff", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -147], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, true, false, false);
        a.p([-4.23, 4, -174.5], [0, 0, 0.52], [10, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1.5, -174.5], [0, 0, 0], [20, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1.6, -156.57], [0, 0.79, 0], [20, 8.4, 4], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([44, -9.44, -333], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([42.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([44, -9.44, -336], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([45.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([44, -9.44, -339], [0, 0, 0], [4, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 5, -45], [0, 0, 0], [0.4, 10, 20], "8f1414", 0, 0, 0, false, false, false, false);
        a.p([10, 5, -45], [0, 0, 0], [0.4, 10, 20], "8f1414", 0, 0, 0, false, false, false, false);
        a.p([0, 0, -45], [0, 0, 0], [20, 0.5, 20], "8f1414", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -181], [0, 0, 0], [20, 6, 12], "9e00ff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -197], [0, 0, 0], [20, 0.5, 20], "ab22ff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -178], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -184], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -181], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, true, false, false);
        a.p([1.5, 5.81, -181], [0, 0, 0], [1, 0.4, 7], "ba4aff", 0, 0, 0.6, false, true, false, false);
        a.p([-1.5, 5.81, -179.5], [0, 0, 0], [1, 0.4, 4], "ba4aff", 0, 0, 0.6, false, true, false, false);
        a.p([0, 0.01, -200], [-0.79, 0, 0], [1, 0.5, 6], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0.01, -200], [0.79, 0, 0], [1, 0.5, 6], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([34, -9.44, -333], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([32.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([34, -9.44, -336], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([35.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([34, -9.44, -339], [0, 0, 0], [4, 0.4, 1], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -32], [0, 0, 0], [1, 0.4, 4], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([84, -9.44, -336], [0, 0, 0], [1, 0.4, 7], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([-6.19, 1.5, -38.13], [-1.57, 0, 0], [2, 3, 2], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([-4.93, 2, -50.76], [-1.57, 0, 0], [4, 4, 4], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([2, 2.5, -45], [-1.57, 0, 0], [0.4, 5, 16], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([6.49, 4, -40.35], [-1.57, 0, 0], [2, 8, 2], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([-0.27, 1.5, -43.61], [-1.57, 0, 0], [6, 3, 6], "d10404", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -225], [0, 0, 0], [20, 0.5, 20], "fe7de1", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -211], [0, 0, 0], [20, 6, 8], "ff3dd3", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -60], [0, 0, 0], [20, 6, 10], "ff6000", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 4.5, -76], [0, 0, 0.05], [0.5, 10, 22], "ff6000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -75], [0, 0, 0], [20, 0.5, 20], "ff8000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -214], [0, 0, 0], [4, 0.4, 1], "ffa9ec", 0, 0, 0.6, false, true, false, false);
        a.p([-1.5, 5.81, -211], [0, 0, 0], [1, 0.4, 7], "ffa9ec", 0, 0, 0.6, false, true, false, false);
        a.p([24, -9.44, -339], [0, 0, 0], [4, 0.4, 1], "ffa9ec", 0, 0, 0.6, false, false, false, false);
        a.p([22.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7], "ffa9ec", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -63], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -57], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -60], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.5, 5.81, -61.5], [0, 0, 0], [1, 0.4, 4], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([1.5, 5.81, -58.5], [0, 0, 0], [1, 0.4, 4], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([74, -9.44, -333], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([75.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([74, -9.44, -336], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([72.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([74, -9.44, -339], [0, 0, 0], [4, 0.4, 1], "ffb000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -90], [0, 0, 0], [20, 6, 10], "ffe000", 0, 0, 0.6, false, false, false, false);
        a.p([10, 5, -104], [0, 0, 0], [0.4, 10, 22], "ffe000", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 5, -104], [0, 0, 0], [0.4, 10, 22], "ffe000", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 3, -104], [0, 0, 0], [0.4, 6, 22], "ffe000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -105], [0, 0, 0], [20, 0.5, 20], "ffe800", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.81, -90], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -93], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, true, false, false);
        a.p([-1.5, 5.81, -90], [0, 0, 0], [1, 0.4, 7], "ffff00", 0, 0, 0.6, false, true, false, false);
        a.p([0, 5.81, -87], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, true, false, false);
        a.p([64, -9.44, -333], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([62.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([64, -9.44, -336], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([64, -9.44, -339], [0, 0, 0], [4, 0.4, 1], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([54, -9.5, -331], [0, 0, 0], [70, 0.5, 20], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([54, -4, -15.5], [0, 0, 0], [10, 0.5, 11], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-10, 5, -90], [0, 0, 0], [0.4, 10, 10], "-1", 0, 0, 0, false, false, false, false);
        a.p([10, 5, -90], [0, 0, 0], [0.4, 10, 10], "-1", 0, 0, 0, false, false, false, false);
        a.p([-10, 5, -150], [0, 0, 0.05], [0.4, 10, 10], "-1", 0, 0, 0, false, false, false, false);
        a.p([10, 5, -150], [0, 0, -0.05], [0.4, 10, 10], "-1", 0, 0, 0, false, false, false, false);
        a.p([0.13, 5.7, -127.72], [0, 0, 0], [2, 0.5, 6], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-0.44, 5.7, -132.25], [0.32, 0, 0], [2, 0.5, 4], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-0.2, 5.7, -135.17], [-0.47, 0, 0], [2, 0.5, 4], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([2.05, 5.7, -137.51], [-1.02, 0, 0], [2, 0.5, 4], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([4.44, 5.7, -139.95], [-0.53, 0, 0], [2, 0.5, 4], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([3.84, 5.7, -143.16], [0.57, 0, 0], [2, 0.5, 6], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([0, 5.8, -114.5], [0, 0, 0], [20, 0.4, 1], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([12, 5, -197], [0, 0, 0], [0.2, 10, 30], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-11, 3, -197], [0, 0, 0], [2, 6, 30], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-12, 5, -197], [0, 0, 0], [0.2, 10, 30], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([11, 3, -197], [0, 0, 0], [2, 6, 30], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-6, 2.75, -240], [0, 0, 0], [8, 7, 10], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([6, 2.75, -240], [0, 0, 0], [8, 7, 10], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0.75, -83.5], [0, 0, 0], [16.4, 0.4, 1], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -32], [0, 0, 0], [20, 6, 6], "8f1414", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1.6, -96.57], [0, 0.79, 0], [20, 8.4, 4], "ffe800", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1.6, -188.57], [0, 0.79, 0], [20, 8.4, 4], "ba4aff", 0, 0, 0.6, false, false, false, false);
        a.p([0, -0.5, -240], [0, 0, 0], [20, 0.5, 10], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([9.7, 4.5, -76], [0, 0, -0.05], [0.5, 10, 22], "ff6000", 0, 0, 0.6, false, false, false, false);
        a.p([4.23, 4, -174.5], [0, 0, -0.52], [10, 0.4, 1], "00ffff", 0, 0, 0.6, false, false, false, false);
        a.p([10, 5, -165], [0, 0, -0.05], [0.4, 12, 20], "0000ff", 0, 0, 0.6, false, false, false, false);
        a.p([10, 3, -104], [0, 0, 0], [0.4, 6, 22], "ffe000", 0, 0, 0.6, false, false, false, false);
        a.p([24, -9.49, -425], [0, 0, 0], [10, 0.5, 4], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([54.84, -3.99, -15.94], [0.79, 0, 0], [1, 0.5, 2], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([54, -9.5, -311], [0, 0, 0], [10, 0.5, 20], "ffffff", 0, 0, 0, false, false, false, false);
        a.y([0, 3, -164.67], [0, 0, 0], [8, 6, 0.2], "00ffff", 0, 0, 0.6, false, 0, false);
        a.e([-1, 1, -240]);
        a.e([1, 1, -240]);
    },
    post: function() {
        a.u('P28');
        a.u('P29');
        a.u('P30');
        a.u('P31');
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("steer", default_steer * 2);
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#00000a"));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < 0) {
                a.msg_set("Go to the left for hints! ");
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -18) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -18) {
                rotation = 0 * Math.PI / 180;
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -21) {
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -22) {
                steer = default_steer * 0;
                rotation = 0 * Math.PI / 180;
                this.section_id += 1
            }
            break;
        case 5:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -30) {
                steer = cc.get("steer", null);
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -35) {
                a.cam_d(1.7);
                a.js(0.3);
                this.section_id += 1
            }
            break;
        case 7:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -57) {
                a.cam_d(null);
                a.js(null);
                this.section_id += 1
            }
            break;
        case 8:
            if (PZ < -65) {
                a.cam_d(1.7);
                speed = default_speed * 0.9;
                a.d(null, 0.05, null);
                this.section_id += 1
            }
            break;
        case 9:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -87) {
                a.cam_d(null);
                speed = cc.get("speed", null);
                a.d(null, null, null);
                this.section_id += 1
            }
            break;
        case 10:
            if (PZ < -95) {
                a.cam_d(1.7);
                this.section_id += 1
            }
            break;
        case 11:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -117) {
                a.cam_d(null);
                this.section_id += 1
            }
            break;
        case 12:
            if (PZ < -121) {
                a.cam_cd(55);
                speed = default_speed * 0.3;
                this.section_id += 1
            }
            break;
        case 13:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -147) {
                a.cam_cd(null);
                speed = cc.get("speed", null);
                this.section_id += 1
            }
            break;
        case 14:
            if (PZ < -155) {
                a.cam_d(1.7);
                speed = default_speed * 0.8;
                a.g(null, 0.7, null);
                this.section_id += 1
            }
            break;
        case 15:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -177) {
                a.cam_d(null);
                speed = cc.get("speed", null);
                a.g(null, null, null);
                this.section_id += 1
            }
            break;
        case 16:
            if (PZ < -185) {
                a.cam_d(1.7);
                this.section_id += 1
            }
            break;
        case 17:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -207) {
                a.cam_d(null);
                this.section_id += 1
            }
            break;
        case 18:
            if (PZ < -236) {
                this.section_id += 1
            }
            break;
        case 19:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -296) {
                this.section_id += 1
            }
            break;
        case 20:
            if (PZ < -341) {
                rotation = 0 * Math.PI / 180;
                this.section_id += 1
            }
            break;
        case 21:
            a.mov('P28', 'y', 0.41);
            a.mov('P29', 'y', 0.41);
            a.mov('P30', 'y', 0.41);
            a.mov('P31', 'z', -4);
            if (PZ < -361) {
                this.section_id += 1
            }
            break;
        case 22:
            if (PZ < -361) {
                a.msg_set("One of the blocks is fake... ");
                this.section_id += 1
            }
            break;
        case 23:
            if (PZ < -371) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 24:
            if (PZ < -371) {
                a.msg_set("Maybe try the corner? ");
                this.section_id += 1
            }
            break;
        case 25:
            if (PZ < -381) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 26:
            if (PZ < -381) {
                a.msg_set("Does it have to do with the wall? Does it? ");
                this.section_id += 1
            }
            break;
        case 27:
            if (PZ < -391) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 28:
            if (PZ < -391) {
                a.msg_set("Stay on the invisible platform... ");
                this.section_id += 1
            }
            break;
        case 29:
            if (PZ < -401) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 30:
            if (PZ < -401) {
                a.msg_set("Wall Sliders ");
                this.section_id += 1
            }
            break;
        case 31:
            if (PZ < -411) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 32:
            if (PZ < -411) {
                a.msg_set("Try thinking outside the box. ");
                this.section_id += 1
            }
            break;
        case 33:
            if (PZ < -421) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 34:
            if (PZ < -421) {
                a.msg_set("The finish must be somewhere around the walls... ");
                this.section_id += 1
            }
            break;
        case 35:
            if (PZ < -431) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [6, 3, -53], [-1.57, 0, 0], [4, 6, 4]);
        a.re('P1', [17, 0, -230], [0, 0, 0], [2, 30, 400]);
        a.re('P2', [10, 5, -135], [0, 0, 0], [0.4, 10, 20]);
        a.re('P3', [10, 5, -197], [0, 0, 0], [0.4, 10, 20]);
        a.re('P4', [10, 5, -225], [0, 0, 0], [0.4, 10, 20]);
        a.re('P5', [-10, 5, -225], [0, 0, 0], [0.4, 10, 20]);
        a.re('P6', [29, -2, -14], [0, 0, -0.09], [40, 0.5, 8]);
        a.re('P7', [54, -9.5, -386], [0, 0, 0], [70, 0.5, 90]);
        a.re('P8', [79, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P9', [89, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P10', [69, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P11', [59, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P12', [49, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P13', [39, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P14', [19, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P15', [24, -4.5, -431], [0, 0, 0], [10, 10, 4]);
        a.re('P16', [34, -4.5, -421], [0, 0, 0], [10, 10, 4]);
        a.re('P17', [44, -4.5, -411], [0, 0, 0], [10, 10, 4]);
        a.re('P18', [54, -4.5, -401], [0, 0, 0], [10, 10, 4]);
        a.re('P19', [64, -4.5, -391], [0, 0, 0], [10, 10, 4]);
        a.re('P20', [74, -4.5, -381], [0, 0, 0], [10, 10, 4]);
        a.re('P21', [84, -4.5, -371], [0, 0, 0], [10, 10, 4]);
        a.re('P22', [29, -4.5, -386], [0, 0, 0], [1, 10, 90]);
        a.re('P23', [54, -7, -161], [0, -0.02, 0], [10, 1, 280]);
        a.re('P24', [0, 2.59, -84.4], [0, -0.26, 0], [20, 7, 1]);
        a.re('P25', [-10, 5, -197], [0, 0, 0], [0.4, 10, 20]);
        a.re('P26', [-10, 5, -135], [0, 0, 0], [0.4, 10, 20]);
        a.re('P27', [0, 3.25, -240], [0, 0, 0], [20, 6, 10]);
        a.re('P28', [4, 0, -14], [0, 0, 0], [10, 0.5, 8]);
        a.re('P29', [0, 0, -5], [0, 0, 0], [2, 0.5, 10]);
        a.re('P30', [0, 0, -24], [0, 0, 0], [2, 0.5, 12]);
        a.re('P31', [54, -6, -9.6], [0, -0.09, 0], [70, 12, 2]);
        a.re('P32', [6, 0.01, -53], [0, 0, 0], [4, 0.5, 4]);
        a.re('P33', [54, -3.99, -15], [0, 0, 0], [1, 0.5, 4]);
        a.re('P34', [53.14, -3.99, -15.94], [-0.79, 0, 0], [1, 0.5, 2]);
        a.re('P35', [0, 3, -150], [0, 0, 0], [20, 6, 10]);
        a.re('P36', [-10, 5, -165], [0, 0, 0.05], [0.4, 12, 20]);
        a.re('P37', [0, 3, -120], [0, 0, 0], [20, 6, 10]);
        a.re('P38', [0, 1.6, -126.57], [0, 0.79, 0], [20, 8.4, 4]);
        a.re('P39', [0, 0, -135], [0, 0, 0], [20, 0.5, 20]);
        a.re('P40', [0, 0, -165], [0, 0, 0], [20, 0.5, 20]);
        a.re('P41', [-1.5, 5.81, -119], [0, 0, 0], [1, 0.4, 7]);
        a.re('P42', [0.13, 5.81, -124], [0, 0, 0], [2, 0.4, 2]);
        a.re('P43', [1.5, 5.81, -120.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P44', [0, 5.81, -119], [0, 0, 0], [4, 0.4, 1]);
        a.re('P45', [0.13, 2.81, -127.91], [0, -0.79, 0], [2, 0.5, 8]);
        a.re('P46', [3.84, 0.01, -143.16], [0.57, 0, 0], [2, 0.5, 6]);
        a.re('P47', [2.05, 0.01, -137.51], [-1.02, 0, 0], [2, 0.5, 4]);
        a.re('P48', [-0.2, 0.01, -135.17], [-0.47, 0, 0], [2, 0.5, 4]);
        a.re('P49', [-0.44, 0.01, -132.25], [0.32, 0, 0], [2, 0.5, 4]);
        a.re('P50', [4.44, 0.01, -139.95], [-0.53, 0, 0], [2, 0.5, 4]);
        a.re('P51', [52.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7]);
        a.re('P52', [54, -9.44, -336], [0, 0, 0], [4, 0.4, 1]);
        a.re('P53', [55.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P54', [0, 5.81, -150], [0, 0, 0], [4, 0.4, 1]);
        a.re('P55', [0, 5.81, -153], [0, 0, 0], [4, 0.4, 1]);
        a.re('P56', [1.5, 5.81, -151.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P57', [-1.5, 5.81, -148.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P58', [0, 5.81, -147], [0, 0, 0], [4, 0.4, 1]);
        a.re('P59', [-4.23, 4, -174.5], [0, 0, 0.52], [10, 0.4, 1]);
        a.re('P60', [0, 1.5, -174.5], [0, 0, 0], [20, 0.4, 1]);
        a.re('P61', [0, 1.6, -156.57], [0, 0.79, 0], [20, 8.4, 4]);
        a.re('P62', [44, -9.44, -333], [0, 0, 0], [4, 0.4, 1]);
        a.re('P63', [42.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P64', [44, -9.44, -336], [0, 0, 0], [4, 0.4, 1]);
        a.re('P65', [45.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P66', [44, -9.44, -339], [0, 0, 0], [4, 0.4, 1]);
        a.re('P67', [-10, 5, -45], [0, 0, 0], [0.4, 10, 20]);
        a.re('P68', [10, 5, -45], [0, 0, 0], [0.4, 10, 20]);
        a.re('P69', [0, 0, -45], [0, 0, 0], [20, 0.5, 20]);
        a.re('P70', [0, 3, -181], [0, 0, 0], [20, 6, 12]);
        a.re('P71', [0, 0, -197], [0, 0, 0], [20, 0.5, 20]);
        a.re('P72', [0, 5.81, -178], [0, 0, 0], [4, 0.4, 1]);
        a.re('P73', [0, 5.81, -184], [0, 0, 0], [4, 0.4, 1]);
        a.re('P74', [0, 5.81, -181], [0, 0, 0], [4, 0.4, 1]);
        a.re('P75', [1.5, 5.81, -181], [0, 0, 0], [1, 0.4, 7]);
        a.re('P76', [-1.5, 5.81, -179.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P77', [0, 0.01, -200], [-0.79, 0, 0], [1, 0.5, 6]);
        a.re('P78', [0, 0.01, -200], [0.79, 0, 0], [1, 0.5, 6]);
        a.re('P79', [34, -9.44, -333], [0, 0, 0], [4, 0.4, 1]);
        a.re('P80', [32.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P81', [34, -9.44, -336], [0, 0, 0], [4, 0.4, 1]);
        a.re('P82', [35.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7]);
        a.re('P83', [34, -9.44, -339], [0, 0, 0], [4, 0.4, 1]);
        a.re('P84', [0, 5.81, -32], [0, 0, 0], [1, 0.4, 4]);
        a.re('P85', [84, -9.44, -336], [0, 0, 0], [1, 0.4, 7]);
        a.re('P86', [-6.19, 1.5, -38.13], [-1.57, 0, 0], [2, 3, 2]);
        a.re('P87', [-4.93, 2, -50.76], [-1.57, 0, 0], [4, 4, 4]);
        a.re('P88', [2, 2.5, -45], [-1.57, 0, 0], [0.4, 5, 16]);
        a.re('P89', [6.49, 4, -40.35], [-1.57, 0, 0], [2, 8, 2]);
        a.re('P90', [-0.27, 1.5, -43.61], [-1.57, 0, 0], [6, 3, 6]);
        a.re('P91', [0, 0, -225], [0, 0, 0], [20, 0.5, 20]);
        a.re('P92', [0, 3, -211], [0, 0, 0], [20, 6, 8]);
        a.re('P93', [0, 3, -60], [0, 0, 0], [20, 6, 10]);
        a.re('P94', [-10, 4.5, -76], [0, 0, 0.05], [0.5, 10, 22]);
        a.re('P95', [0, 0, -75], [0, 0, 0], [20, 0.5, 20]);
        a.re('P96', [0, 5.81, -214], [0, 0, 0], [4, 0.4, 1]);
        a.re('P97', [-1.5, 5.81, -211], [0, 0, 0], [1, 0.4, 7]);
        a.re('P98', [24, -9.44, -339], [0, 0, 0], [4, 0.4, 1]);
        a.re('P99', [22.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7]);
        a.re('P100', [0, 5.81, -63], [0, 0, 0], [4, 0.4, 1]);
        a.re('P101', [0, 5.81, -57], [0, 0, 0], [4, 0.4, 1]);
        a.re('P102', [0, 5.81, -60], [0, 0, 0], [4, 0.4, 1]);
        a.re('P103', [-1.5, 5.81, -61.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P104', [1.5, 5.81, -58.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P105', [74, -9.44, -333], [0, 0, 0], [4, 0.4, 1]);
        a.re('P106', [75.5, -9.44, -334.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P107', [74, -9.44, -336], [0, 0, 0], [4, 0.4, 1]);
        a.re('P108', [72.5, -9.44, -337.5], [0, 0, 0], [1, 0.4, 4]);
        a.re('P109', [74, -9.44, -339], [0, 0, 0], [4, 0.4, 1]);
        a.re('P110', [0, 3, -90], [0, 0, 0], [20, 6, 10]);
        a.re('P111', [10, 5, -104], [0, 0, 0], [0.4, 10, 22]);
        a.re('P112', [-10, 5, -104], [0, 0, 0], [0.4, 10, 22]);
        a.re('P113', [-10, 3, -104], [0, 0, 0], [0.4, 6, 22]);
        a.re('P114', [0, 0, -105], [0, 0, 0], [20, 0.5, 20]);
        a.re('P115', [0, 5.81, -90], [0, 0, 0], [4, 0.4, 1]);
        a.re('P116', [0, 5.81, -93], [0, 0, 0], [4, 0.4, 1]);
        a.re('P117', [-1.5, 5.81, -90], [0, 0, 0], [1, 0.4, 7]);
        a.re('P118', [0, 5.81, -87], [0, 0, 0], [4, 0.4, 1]);
        a.re('P119', [64, -9.44, -333], [0, 0, 0], [4, 0.4, 1]);
        a.re('P120', [62.5, -9.44, -336], [0, 0, 0], [1, 0.4, 7]);
        a.re('P121', [64, -9.44, -336], [0, 0, 0], [4, 0.4, 1]);
        a.re('P122', [64, -9.44, -339], [0, 0, 0], [4, 0.4, 1]);
        a.re('P123', [54, -9.5, -331], [0, 0, 0], [70, 0.5, 20]);
        a.re('P124', [54, -4, -15.5], [0, 0, 0], [10, 0.5, 11]);
        a.re('P125', [-10, 5, -90], [0, 0, 0], [0.4, 10, 10]);
        a.re('P126', [10, 5, -90], [0, 0, 0], [0.4, 10, 10]);
        a.re('P127', [-10, 5, -150], [0, 0, 0.05], [0.4, 10, 10]);
        a.re('P128', [10, 5, -150], [0, 0, -0.05], [0.4, 10, 10]);
        a.re('P129', [0.13, 5.7, -127.72], [0, 0, 0], [2, 0.5, 6]);
        a.re('P130', [-0.44, 5.7, -132.25], [0.32, 0, 0], [2, 0.5, 4]);
        a.re('P131', [-0.2, 5.7, -135.17], [-0.47, 0, 0], [2, 0.5, 4]);
        a.re('P132', [2.05, 5.7, -137.51], [-1.02, 0, 0], [2, 0.5, 4]);
        a.re('P133', [4.44, 5.7, -139.95], [-0.53, 0, 0], [2, 0.5, 4]);
        a.re('P134', [3.84, 5.7, -143.16], [0.57, 0, 0], [2, 0.5, 6]);
        a.re('P135', [0, 5.8, -114.5], [0, 0, 0], [20, 0.4, 1]);
        a.re('P136', [12, 5, -197], [0, 0, 0], [0.2, 10, 30]);
        a.re('P137', [-11, 3, -197], [0, 0, 0], [2, 6, 30]);
        a.re('P138', [-12, 5, -197], [0, 0, 0], [0.2, 10, 30]);
        a.re('P139', [11, 3, -197], [0, 0, 0], [2, 6, 30]);
        a.re('P140', [-6, 2.75, -240], [0, 0, 0], [8, 7, 10]);
        a.re('P141', [6, 2.75, -240], [0, 0, 0], [8, 7, 10]);
        a.re('P142', [0, 0.75, -83.5], [0, 0, 0], [16.4, 0.4, 1]);
        a.re('P143', [0, 3, -32], [0, 0, 0], [20, 6, 6]);
        a.re('P144', [0, 1.6, -96.57], [0, 0.79, 0], [20, 8.4, 4]);
        a.re('P145', [0, 1.6, -188.57], [0, 0.79, 0], [20, 8.4, 4]);
        a.re('P146', [0, -0.5, -240], [0, 0, 0], [20, 0.5, 10]);
        a.re('P147', [9.7, 4.5, -76], [0, 0, -0.05], [0.5, 10, 22]);
        a.re('P148', [4.23, 4, -174.5], [0, 0, -0.52], [10, 0.4, 1]);
        a.re('P149', [10, 5, -165], [0, 0, -0.05], [0.4, 12, 20]);
        a.re('P150', [10, 3, -104], [0, 0, 0], [0.4, 6, 22]);
        a.re('P151', [24, -9.49, -425], [0, 0, 0], [10, 0.5, 4]);
        a.re('P152', [54.84, -3.99, -15.94], [0.79, 0, 0], [1, 0.5, 2]);
        a.re('P153', [54, -9.5, -311], [0, 0, 0], [10, 0.5, 20]);
        a.re('Y0', [0, 3, -164.67], [0, 0, 0], [8, 6, 0.2]);
        a.re('E0', [-1, 1, -240], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [1, 1, -240], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
