var map = {
    title: "Drifting Dodo",
    song: "env2",
    maker: "LEo",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([38.67, -1.57, -112.81], [0, 0, 0], [0.78, 13.96, 0.78], "1c1c1c", 0, 0, 0.6, false, 1, false);
        a.y([95.84, -1.57, -237.32], [0, 0, 0], [0.78, 13.96, 0.78], "1c1c1c", 0, 0, 0.6, false, 1, false);
        a.y([35.9, -1.89972, -234.37], [0, 0, 0], [0.78, 13.96, 0.78], "1c1c1c", 0, 0, 0.6, false, 1, false);
        a.y([-0.82, -1.57, -168.65], [0, 0, 0], [0.78, 13.96, 0.78], "1c1c1c", 0, 0, 0.6, false, 1, false);
        a.y([35.35, -1.57, -182.62], [0, 0, 0], [0.78, 13.96, 0.78], "1c1c1c", 0, 0, 0.6, false, 1, false);
        a.p([-0.28, -3.82, -24.69], [0, 0, 0], [4.86, 6.08, 55.64], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([12.04, -3.82, -75.84], [-0.47, 0, 0], [4.96, 6.08, 53], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([23.87, -3.81, -127.03], [0, 0, 0], [4.88, 6.08, 57.58], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([16.36, -3.82, -166.25], [0.58, 0, 0], [5.18, 6.08, 29.3], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([5.66, -3.69, -183.39979], [0, 0, -0.35], [6.08, 6.08, 14.88], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([14.5, -5.13, -214.17], [0.92, 0, 0], [6.82, 6.08, 34.94], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([18.23, -5.09965, -197.35], [-0.99, 0, 0], [5.6, 6.08, 28.76], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([1.25, -5.13, -237.74], [0, 0, 0], [5.22, 6.08, 31.16], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([15.97, -5.13, -251.07], [-1.56, 0, 0], [4.88, 6.08, 31.16], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([45.82, -5.41, -247.18], [-1.85, 0, 0], [5.12, 6.08, 30.68], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([47.27, -5.44, -229.23], [-3.76, 0, 0], [6.4, 6.08, 34.24], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([55.45, -5.64, -211.05], [-5.02, 0, 0], [5.36, 6.08, 30.82], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([74.04, -5.71, -220.02], [-0.54, 0, 0], [5.28, 6.08, 29.76], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([81.12, -5.72, -258.68], [0, 0, 0], [5.5, 6.08, 55.64], "1e1f21", 0, 0, 0.6, false, false, false, false);
        a.p([50.77, -4.34, -85.69965], [0, 0, 0], [1239.52, 2, 1239.52], "299e4e", 0, 0, 0.6, false, false, true, false);
        a.y([-28.04, -1.57, -87.84], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([6.17, -1.57, -112.81], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([59.89, -1.57, -98.36], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([59.56, -1.57, -221.99], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([10.8, -1.57, -200.06], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([68.21, -1.57, -263.15], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([94.09, -1.57, -263.15], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([36.79, -1.57, -264.12], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([-14.89, -1.57, -231.53], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([43.91, -1.57, -191.91], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([82.48, -1.57, -207.52], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([63.61, -1.57, -183.73], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.y([44.31, -1.57, -160.23], [0, 0, 0], [3.2, 13.9, 3.2], "2e2423", 0, 0, 0.6, false, 1, false);
        a.s([-27.79979, 9.34, -88.01], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([6.41, 9.34, -112.98], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([60.13, 9.34, -98.53], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([59.8, 9.34, -222.16], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([11.04, 9.34, -200.23], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([68.45, 9.34, -263.33], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([94.34, 9.34, -263.33], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([37.03, 9.34, -264.29], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([-14.65, 9.34, -231.69979], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([44.15, 9.34, -192.08], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([82.72, 9.34, -207.69], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([63.85, 9.34, -183.89958], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.s([44.55, 9.34, -160.39951], 11.84, "2f8a41", 0, 0, 0.6, false, false);
        a.p([10.62, -0.92, -136.91], [0, 0, 0], [3.46, 0.46, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([10.04, -0.92, -41.81], [0, 0, 0], [3.46, 0.46, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([12.51, -2.87, -132.89], [0, -0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([12.51, -2.87, -140.97], [0, 0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([8.15, -2.87, -37.79], [0, -0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-7.27, -0.92, -236.34], [0, 0, 0], [3.46, 0.46, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-9.26, -2.87, -240.29958], [0, 0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-9.25, -2.87, -232.31], [0, -0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([9.08, 0.74, -136.91], [0, 0, 0], [0.58, 2.34, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-8.79993, 0.74, -236.34], [0, 0, 0], [0.58, 2.34, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([8.64, -2.87, -132.88], [0, -0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([8.62, -2.87, -140.86], [0, 0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-5.37, -2.87, -240.41], [0, 0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-5.37, -2.87, -232.33], [0, -0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([73.62, -2.87, -242.21], [0, -0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([73.62, -2.87, -250.29], [0, 0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([70.2, 0.74, -246.22], [0, 0, 0], [0.58, 2.34, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([69.75, -2.87, -242.19993], [0, -0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([69.73, -2.87, -250.18], [0, 0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([71.73, -0.92, -246.22], [0, 0, 0], [3.46, 0.46, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([-0.28, -0.89, -15.39], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([-0.28, -0.89, -24.52], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([-0.28, -0.89, -7.19958], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([-0.28, -0.89, -33.57], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([-0.28, -0.89, -42.28], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([20.06, -0.89, -91.49], [-0.47, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([16.09, -0.89, -83.74], [-0.47, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([4.06, -0.89, -60.27], [-0.47, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([11.96, -0.89, -75.69], [-0.47, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([7.8, -0.89, -67.57], [-0.47, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([23.85, -0.89, -144.62], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([23.85, -0.89, -135.94], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([34.89, -0.92, -136.91], [0, 0, 0], [3.6, 0.46, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([12.04, -2.87, -45.77], [0, 0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([12.02, -2.87, -37.78], [0, -0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([11.58, 0.74, -41.81], [0, 0, 0], [0.58, 2.34, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([36.49, 0.74, -136.91], [0, 0, 0], [0.58, 2.44, 7.72], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([8.15, -2.87, -45.87], [0, 0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([33.06, -2.87, -132.89], [0, -0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([36.93, -2.87, -132.88], [0, -0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([36.95, -2.87, -140.86], [0, 0.22, 0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([33.06, -2.87, -140.97], [0, 0.22, -0.25], [0.28, 4.1, 0.34], "453c22", 0, 0, 0.6, false, true, false, false);
        a.p([23.85, -0.89, -109.54], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([23.85, -0.89, -126.59979], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([23.85, -0.89, -117.74], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([21.41, -0.89, -158.45], [0.58, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([16.45, -0.89, -166.09958], [0.58, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([25.67, -2.17, -202.19], [-0.99, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([11.52, -0.89, -173.7], [0.58, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([18.09, -2.17, -197.25], [-0.99, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([6.66, -0.93, -183.89], [0, 0, -0.35], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([21.91, -2.19979, -208.57], [0.92, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([14.64, -2.19972, -214.07], [0.92, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([7.42, -2.19965, -219.54], [0.92, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([10.44, -2.17, -192.27], [-0.99, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([37.7, -2.48, -249.68], [-1.85, 0, 0], [1.66, 0.46, 4.5], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([54.11, -2.48, -244.71], [-1.85, 0, 0], [1.66, 0.46, 4.5], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([1.25, -2.19993, -228.45], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([1.25, -2.19986, -237.57], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([1.25, -2.19979, -246.62], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([6.68, -2.19972, -250.96], [-1.56, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([15.8, -2.19965, -251.07], [-1.56, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([24.85, -2.19958, -251.17], [-1.56, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([42.11, -2.51, -221.99951], [-3.76, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([47.37, -2.51, -229.37], [-3.76, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([52.67, -2.51, -236.79], [-3.76, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([45.65, -2.48, -247.23], [-1.85, 0, 0], [1.66, 0.46, 4.5], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([46.98, -2.71, -213.73], [-5.02, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([55.61, -2.71, -210.99972], [-5.02, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([64.31, -2.71, -208.24], [-5.02, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([68.8, -2.77, -211.14], [-0.54, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([73.49, -2.77, -218.97], [-0.54, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([78.13, -2.77, -226.74], [-0.54, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([81.12, -2.79, -276.27], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([81.12, -2.79, -267.56], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([81.12, -2.79, -241.19], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([81.12, -2.79, -258.51], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.p([81.12, -2.79, -249.38], [0, 0, 0], [1.66, 0.46, 4.52], "cfcfcf", 0, 0, 0.6, false, true, false, false);
        a.y([30.47, 1.49, -112.84], [0, 0, -1.08], [2.46, 19.16, 2.46], "d4bf24,0.25", 0, 0, 0.6, true, 0.25, false);
        a.y([19.68, 1.76, -182.99], [0, 0, -1.34], [3.64, 31.8, 3.64], "d4bf24,0.25", 0, 0, 0.6, true, 0.25, false);
        a.y([43.62, 0.89, -234.48], [0, 0, 1.08], [2.46, 19.16, 2.46], "d4bf24,0.25", 0, 0, 0.6, true, 0.25, false);
        a.y([88.46, 0.86, -237.38], [0, 0, -1.01], [2.46, 19.16, 2.46], "d4bf24,0.25", 0, 0, 0.6, true, 0.25, false);
        a.y([6.95, 1.33, -168.64], [0, 0, 1.08], [2.46, 19.16, 2.46], "d4bf24,0.25", 0, 0, 0.6, true, 0.25, false);
        a.p([38.62, 5.85, -112.82], [0, 0, 0], [1.66, 1.26, 1.56], "d4bf24", 0, 0, 0.6, false, false, false, false);
        a.p([35.3, 5.85, -182.63], [0, 0, 0], [1.66, 1.26, 1.56], "d4bf24", 0, 0, 0.6, false, false, false, false);
        a.p([-0.87, 5.85, -168.66], [0, 0, 0], [1.66, 1.26, 1.56], "d4bf24", 0, 0, 0.6, false, false, false, false);
        a.p([95.78, 5.85, -237.34], [0, 0, 0], [1.66, 1.26, 1.56], "d4bf24", 0, 0, 0.6, false, false, false, false);
        a.p([35.85, 5.16, -234.38], [0, 0, 0], [1.66, 1.26, 1.56], "d4bf24", 0, 0, 0.6, false, false, false, false);
        a.c([-2.15, -0.33999999999999997, -52.17], "d97400");
        a.c([-1.04, -0.33999999999999997, -45.52], "d97400");
        a.c([23.23, -0.33999999999999997, -141.39], "d97400");
        a.c([-0.82, -0.33999999999999997, -52.15], "d97400");
        a.c([17.77, -0.37, -163.39972], "d97400");
        a.c([23.39, -0.37, -158.46], "d97400");
        a.c([11.76, -0.37, -169.96], "d97400");
        a.c([28.17, -1.5299999999999998, -205.78], "d97400");
        a.c([23.97, -0.33999999999999997, -98.48], "d97400");
        a.c([28.17, -1.5299999999999998, -202.25], "d97400");
        a.c([42.47, -1.9699999999999998, -217.65], "d97400");
        a.c([35.76, -2.06, -217.29], "d97400");
        a.c([59.59, -2.06, -243.87], "d97400");
        a.c([-0.11, -1.71, -252.19965], "d97400");
        a.c([1.44, -1.71, -251.17], "d97400");
        a.c([57.48, -2.06, -243.87], "d97400");
        a.c([1.5, -0.4700000000000001, -37.33], "d97400");
        a.c([6.52, -0.4700000000000001, -60.98], "d97400");
        a.c([8.21, -0.4700000000000001, -71.77], "d97400");
        a.c([-1.62, -0.4700000000000001, -30.08], "d97400");
        a.c([14.68, -0.4700000000000001, -77.01], "d97400");
        a.c([82.48, -2.4299999999999997, -231.44], "d97400");
        a.c([80.83, -2.4299999999999997, -231.44], "d97400");
        a.c([67.77, -2.08, -205.49951], "d97400");
        a.c([25.62, -0.4700000000000001, -126.5], "d97400");
        a.c([22.12, -0.4700000000000001, -131.85], "d97400");
        a.c([25.57, -0.4700000000000001, -145.21], "d97400");
        a.c([67.77, -2.08, -207.28], "d97400");
        a.c([5.14, 0.05999999999999994, -183.44], "d97400");
        a.c([15.82, -1.87, -215.49965], "d97400");
        a.c([1.44, -1.71, -237.17], "d97400");
        a.c([21.29, -1.7599999999999998, -251.77], "d97400");
        a.c([46.45, -1.87, -229.75], "d97400");
        a.c([52.9, -2.14, -211.78], "d97400");
        a.c([82.34, -2.4099999999999997, -252.68], "d97400");
        a.c([51.01, -1.87, -234.58], "d97400");
        a.c([40.67, -1.7599999999999998, -247.78], "d97400");
        a.c([79.37, -2.4099999999999997, -246.83], "d97400");
        a.c([81.54, -2.4099999999999997, -275.77], "d97400");
        a.c([79.53, -2.4099999999999997, -262.79951], "d97400");
        a.p([-14.58, -2.62, -109.22], [2.92, 0, 0], [285.4, 19.82, 429.46], "-1.0", 0, 0, 0.6, false, true, false, true);
        a.e([81.23, -1.63, -283.49979]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#0e1429"));
        cc.set_monkey("light.intensity", 0.75);
        cc.set_monkey("player.scaling", new BABYLON.Vector3(null,0.5,null));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < -0.9399999999999977) {
                steer = default_steer * 0.25;
                speed = default_speed * 1.01;
                a.d(null, 0.5, 4.0);
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -152.48) {
                steer = cc.get("steer", null);
                speed = cc.get("speed", null);
                a.d(null, null, null);
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -192.88) {
                steer = default_steer * 0.5;
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -257.6) {
                steer = cc.get("steer", null);
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [38.67, -1.57, -112.81], [0, 0, 0], [0.78, 13.96, 0.78]);
        a.re('Y1', [95.84, -1.57, -237.32], [0, 0, 0], [0.78, 13.96, 0.78]);
        a.re('Y2', [35.9, -1.89972, -234.37], [0, 0, 0], [0.78, 13.96, 0.78]);
        a.re('Y3', [-0.82, -1.57, -168.65], [0, 0, 0], [0.78, 13.96, 0.78]);
        a.re('Y4', [35.35, -1.57, -182.62], [0, 0, 0], [0.78, 13.96, 0.78]);
        a.re('P0', [-0.28, -3.82, -24.69], [0, 0, 0], [4.86, 6.08, 55.64]);
        a.re('P1', [12.04, -3.82, -75.84], [-0.47, 0, 0], [4.96, 6.08, 53]);
        a.re('P2', [23.87, -3.81, -127.03], [0, 0, 0], [4.88, 6.08, 57.58]);
        a.re('P3', [16.36, -3.82, -166.25], [0.58, 0, 0], [5.18, 6.08, 29.3]);
        a.re('P4', [5.66, -3.69, -183.39979], [0, 0, -0.35], [6.08, 6.08, 14.88]);
        a.re('P5', [14.5, -5.13, -214.17], [0.92, 0, 0], [6.82, 6.08, 34.94]);
        a.re('P6', [18.23, -5.09965, -197.35], [-0.99, 0, 0], [5.6, 6.08, 28.76]);
        a.re('P7', [1.25, -5.13, -237.74], [0, 0, 0], [5.22, 6.08, 31.16]);
        a.re('P8', [15.97, -5.13, -251.07], [-1.56, 0, 0], [4.88, 6.08, 31.16]);
        a.re('P9', [45.82, -5.41, -247.18], [-1.85, 0, 0], [5.12, 6.08, 30.68]);
        a.re('P10', [47.27, -5.44, -229.23], [-3.76, 0, 0], [6.4, 6.08, 34.24]);
        a.re('P11', [55.45, -5.64, -211.05], [-5.02, 0, 0], [5.36, 6.08, 30.82]);
        a.re('P12', [74.04, -5.71, -220.02], [-0.54, 0, 0], [5.28, 6.08, 29.76]);
        a.re('P13', [81.12, -5.72, -258.68], [0, 0, 0], [5.5, 6.08, 55.64]);
        a.re('P14', [50.77, -4.34, -85.69965], [0, 0, 0], [1239.52, 2, 1239.52]);
        a.re('Y5', [-28.04, -1.57, -87.84], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y6', [6.17, -1.57, -112.81], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y7', [59.89, -1.57, -98.36], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y8', [59.56, -1.57, -221.99], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y9', [10.8, -1.57, -200.06], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y10', [68.21, -1.57, -263.15], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y11', [94.09, -1.57, -263.15], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y12', [36.79, -1.57, -264.12], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y13', [-14.89, -1.57, -231.53], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y14', [43.91, -1.57, -191.91], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y15', [82.48, -1.57, -207.52], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y16', [63.61, -1.57, -183.73], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('Y17', [44.31, -1.57, -160.23], [0, 0, 0], [3.2, 13.9, 3.2]);
        a.re('S0', [-27.79979, 9.34, -88.01], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S1', [6.41, 9.34, -112.98], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S2', [60.13, 9.34, -98.53], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S3', [59.8, 9.34, -222.16], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S4', [11.04, 9.34, -200.23], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S5', [68.45, 9.34, -263.33], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S6', [94.34, 9.34, -263.33], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S7', [37.03, 9.34, -264.29], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S8', [-14.65, 9.34, -231.69979], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S9', [44.15, 9.34, -192.08], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S10', [82.72, 9.34, -207.69], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S11', [63.85, 9.34, -183.89958], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('S12', [44.55, 9.34, -160.39951], [0, 0, 0], [11.84, 11.84, 11.84]);
        a.re('P15', [10.62, -0.92, -136.91], [0, 0, 0], [3.46, 0.46, 7.72]);
        a.re('P16', [10.04, -0.92, -41.81], [0, 0, 0], [3.46, 0.46, 7.72]);
        a.re('P17', [12.51, -2.87, -132.89], [0, -0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P18', [12.51, -2.87, -140.97], [0, 0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P19', [8.15, -2.87, -37.79], [0, -0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P20', [-7.27, -0.92, -236.34], [0, 0, 0], [3.46, 0.46, 7.72]);
        a.re('P21', [-9.26, -2.87, -240.29958], [0, 0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P22', [-9.25, -2.87, -232.31], [0, -0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P23', [9.08, 0.74, -136.91], [0, 0, 0], [0.58, 2.34, 7.72]);
        a.re('P24', [-8.79993, 0.74, -236.34], [0, 0, 0], [0.58, 2.34, 7.72]);
        a.re('P25', [8.64, -2.87, -132.88], [0, -0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P26', [8.62, -2.87, -140.86], [0, 0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P27', [-5.37, -2.87, -240.41], [0, 0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P28', [-5.37, -2.87, -232.33], [0, -0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P29', [73.62, -2.87, -242.21], [0, -0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P30', [73.62, -2.87, -250.29], [0, 0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P31', [70.2, 0.74, -246.22], [0, 0, 0], [0.58, 2.34, 7.72]);
        a.re('P32', [69.75, -2.87, -242.19993], [0, -0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P33', [69.73, -2.87, -250.18], [0, 0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P34', [71.73, -0.92, -246.22], [0, 0, 0], [3.46, 0.46, 7.72]);
        a.re('P35', [-0.28, -0.89, -15.39], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P36', [-0.28, -0.89, -24.52], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P37', [-0.28, -0.89, -7.19958], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P38', [-0.28, -0.89, -33.57], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P39', [-0.28, -0.89, -42.28], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P40', [20.06, -0.89, -91.49], [-0.47, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P41', [16.09, -0.89, -83.74], [-0.47, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P42', [4.06, -0.89, -60.27], [-0.47, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P43', [11.96, -0.89, -75.69], [-0.47, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P44', [7.8, -0.89, -67.57], [-0.47, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P45', [23.85, -0.89, -144.62], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P46', [23.85, -0.89, -135.94], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P47', [34.89, -0.92, -136.91], [0, 0, 0], [3.6, 0.46, 7.72]);
        a.re('P48', [12.04, -2.87, -45.77], [0, 0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P49', [12.02, -2.87, -37.78], [0, -0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P50', [11.58, 0.74, -41.81], [0, 0, 0], [0.58, 2.34, 7.72]);
        a.re('P51', [36.49, 0.74, -136.91], [0, 0, 0], [0.58, 2.44, 7.72]);
        a.re('P52', [8.15, -2.87, -45.87], [0, 0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P53', [33.06, -2.87, -132.89], [0, -0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P54', [36.93, -2.87, -132.88], [0, -0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P55', [36.95, -2.87, -140.86], [0, 0.22, 0.25], [0.28, 4.1, 0.34]);
        a.re('P56', [33.06, -2.87, -140.97], [0, 0.22, -0.25], [0.28, 4.1, 0.34]);
        a.re('P57', [23.85, -0.89, -109.54], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P58', [23.85, -0.89, -126.59979], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P59', [23.85, -0.89, -117.74], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P60', [21.41, -0.89, -158.45], [0.58, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P61', [16.45, -0.89, -166.09958], [0.58, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P62', [25.67, -2.17, -202.19], [-0.99, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P63', [11.52, -0.89, -173.7], [0.58, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P64', [18.09, -2.17, -197.25], [-0.99, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P65', [6.66, -0.93, -183.89], [0, 0, -0.35], [1.66, 0.46, 4.52]);
        a.re('P66', [21.91, -2.19979, -208.57], [0.92, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P67', [14.64, -2.19972, -214.07], [0.92, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P68', [7.42, -2.19965, -219.54], [0.92, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P69', [10.44, -2.17, -192.27], [-0.99, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P70', [37.7, -2.48, -249.68], [-1.85, 0, 0], [1.66, 0.46, 4.5]);
        a.re('P71', [54.11, -2.48, -244.71], [-1.85, 0, 0], [1.66, 0.46, 4.5]);
        a.re('P72', [1.25, -2.19993, -228.45], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P73', [1.25, -2.19986, -237.57], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P74', [1.25, -2.19979, -246.62], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P75', [6.68, -2.19972, -250.96], [-1.56, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P76', [15.8, -2.19965, -251.07], [-1.56, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P77', [24.85, -2.19958, -251.17], [-1.56, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P78', [42.11, -2.51, -221.99951], [-3.76, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P79', [47.37, -2.51, -229.37], [-3.76, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P80', [52.67, -2.51, -236.79], [-3.76, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P81', [45.65, -2.48, -247.23], [-1.85, 0, 0], [1.66, 0.46, 4.5]);
        a.re('P82', [46.98, -2.71, -213.73], [-5.02, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P83', [55.61, -2.71, -210.99972], [-5.02, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P84', [64.31, -2.71, -208.24], [-5.02, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P85', [68.8, -2.77, -211.14], [-0.54, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P86', [73.49, -2.77, -218.97], [-0.54, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P87', [78.13, -2.77, -226.74], [-0.54, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P88', [81.12, -2.79, -276.27], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P89', [81.12, -2.79, -267.56], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P90', [81.12, -2.79, -241.19], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P91', [81.12, -2.79, -258.51], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('P92', [81.12, -2.79, -249.38], [0, 0, 0], [1.66, 0.46, 4.52]);
        a.re('Y18', [30.47, 1.49, -112.84], [0, 0, -1.08], [2.46, 19.16, 2.46]);
        a.re('Y19', [19.68, 1.76, -182.99], [0, 0, -1.34], [3.64, 31.8, 3.64]);
        a.re('Y20', [43.62, 0.89, -234.48], [0, 0, 1.08], [2.46, 19.16, 2.46]);
        a.re('Y21', [88.46, 0.86, -237.38], [0, 0, -1.01], [2.46, 19.16, 2.46]);
        a.re('Y22', [6.95, 1.33, -168.64], [0, 0, 1.08], [2.46, 19.16, 2.46]);
        a.re('P93', [38.62, 5.85, -112.82], [0, 0, 0], [1.66, 1.26, 1.56]);
        a.re('P94', [35.3, 5.85, -182.63], [0, 0, 0], [1.66, 1.26, 1.56]);
        a.re('P95', [-0.87, 5.85, -168.66], [0, 0, 0], [1.66, 1.26, 1.56]);
        a.re('P96', [95.78, 5.85, -237.34], [0, 0, 0], [1.66, 1.26, 1.56]);
        a.re('P97', [35.85, 5.16, -234.38], [0, 0, 0], [1.66, 1.26, 1.56]);
        a.re('C0', [-2.15, -0.33999999999999997, -52.17], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-1.04, -0.33999999999999997, -45.52], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [23.23, -0.33999999999999997, -141.39], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-0.82, -0.33999999999999997, -52.15], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [17.77, -0.37, -163.39972], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [23.39, -0.37, -158.46], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [11.76, -0.37, -169.96], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [28.17, -1.5299999999999998, -205.78], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [23.97, -0.33999999999999997, -98.48], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [28.17, -1.5299999999999998, -202.25], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [42.47, -1.9699999999999998, -217.65], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [35.76, -2.06, -217.29], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [59.59, -2.06, -243.87], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-0.11, -1.71, -252.19965], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [1.44, -1.71, -251.17], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [57.48, -2.06, -243.87], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [1.5, -0.4700000000000001, -37.33], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [6.52, -0.4700000000000001, -60.98], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [8.21, -0.4700000000000001, -71.77], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-1.62, -0.4700000000000001, -30.08], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [14.68, -0.4700000000000001, -77.01], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [82.48, -2.4299999999999997, -231.44], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [80.83, -2.4299999999999997, -231.44], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [67.77, -2.08, -205.49951], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [25.62, -0.4700000000000001, -126.5], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [22.12, -0.4700000000000001, -131.85], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [25.57, -0.4700000000000001, -145.21], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [67.77, -2.08, -207.28], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [5.14, 0.05999999999999994, -183.44], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [15.82, -1.87, -215.49965], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [1.44, -1.71, -237.17], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [21.29, -1.7599999999999998, -251.77], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [46.45, -1.87, -229.75], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [52.9, -2.14, -211.78], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [82.34, -2.4099999999999997, -252.68], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [51.01, -1.87, -234.58], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [40.67, -1.7599999999999998, -247.78], [0, 0, 0], [2, 2, 2]);
        a.re('C37', [79.37, -2.4099999999999997, -246.83], [0, 0, 0], [2, 2, 2]);
        a.re('C38', [81.54, -2.4099999999999997, -275.77], [0, 0, 0], [2, 2, 2]);
        a.re('C39', [79.53, -2.4099999999999997, -262.79951], [0, 0, 0], [2, 2, 2]);
        a.re('P98', [-14.58, -2.62, -109.22], [2.92, 0, 0], [285.4, 19.82, 429.46]);
        a.re('E0', [81.23, -1.63, -283.49979], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
