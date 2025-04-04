var map = {
    title: "Microcosm",
    song: "env2",
    maker: "Bumpo & Zoni",
    spawn: [0, 0.5, 0],
    init: function() {
        a.s([-19.98, 0.02, -309.48], 5.22, "00ff00,0.7", 0, 0, 0.6, true, false);
        a.c([-18.51, 0.31999999999999995, -318.88], "00ff00");
        a.c([-13.83, 0.31999999999999995, -325.17], "00ff00");
        a.p([-0.07, 1.08, -43.41], [-1.57, 0, 0], [0.16, 94.44, 138.92], "0c0d0f", 0, 0, 0.6, false, true, false, false);
        a.p([-0.07, 1.08, -263.37], [-1.57, 0, 0], [0.16, 94.44, 138.92], "0c0d0f", 0, 0, 0.6, false, true, false, false);
        a.s([17.23, 0.02, -309.6], 5.22, "1100ff,0.7", 0, 0, 0.6, true, false);
        a.c([3.14, 0.31999999999999995, -284.54], "1100ff");
        a.c([15.68, 0.31999999999999995, -300.51], "1100ff");
        a.c([10.55, 0.31999999999999995, -292.37], "1100ff");
        a.y([-4.29972, 3.29, -167.69], [0, 0, 0], [1.28, 1.06, 1.28], "2a7832,0.5", 0, 0, 0.6, false, 1, false);
        a.y([0.11, 3.29, -260.07], [0, 0, 0], [1.28, 1.06, 1.28], "2a7832,0.5", 0, 0, 0.6, false, 1, false);
        a.y([-0.08, 3.29, -39.19], [0, 0, 0], [1.28, 1.06, 1.28], "2a7832,0.5", 0, 0, 0.6, false, 1, false);
        a.p([-1.99, -0.41, -195.91], [-0.24, 0, 0], [2.12, 0.18, 17.94], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-4.48, -0.41, -217.81], [0.58, 0, 0], [2.12, 0.18, 17.94], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([0.05, -0.41, -207.55], [0, 0, 0], [2.12, 0.18, 7.62], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-8.34, -0.41, -228.89], [-0.18, 0, 0], [2.12, 0.18, 9], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-3.71, -0.41, -241.61], [-0.42, 0, 0], [2.12, 0.18, 19.4], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([0.07, -0.41, -255.79], [0.01, 0, 0], [2.12, 0.18, 11.92], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-4.07, -0.41, -178.66], [0, 0, 0], [2.12, 0.18, 17.94], "2f7b8a,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-0.07, 1.08, -261.84], [-1.57, 0, 0], [1.06, 94.44, 138.92], "3295a8", 0, 0, 0.6, false, true, false, false);
        a.p([-2.79951, -5.62, -215.55], [0, 0, 0], [46.9, 0.88, 92.2], "3295a8,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-2.8, -11.11, -215.21], [0, 0, 0], [46.9, 0.88, 92.2], "3295a8", 0, 0, 0.6, false, false, false, false);
        a.p([-25.82, 1.08, -215.74], [0, 0, 0], [0.16, 94.44, 92.52], "3295a8", 0, 0, 0.6, false, false, false, false);
        a.p([18.74, 1.08, -216.08], [0, 0, 0], [0.16, 92.52, 94.04], "3295a8", 0, 0, 0.6, false, false, false, false);
        a.y([-0.44, 3.85, -229.72], [0, 0, 0], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([1.02, -1.85, -227.12], [-2.17, -2.27, 0.6], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-0.44, -0.04, -226.25], [-3.14, -1.57, 0], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-0.44, -0.04, -233.24], [0, -1.57, 0], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-3.99951, -0.04, -229.64], [-4.71, -1.57, 0], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([3.01, -0.04, -229.64], [-1.57, -1.57, 0], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-0.44, -3.31, -229.72], [0, 0, 3.14], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-2.02, 1.85, -232.23], [-5.31, -0.88, -0.6], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-2.05, 1.89, -227.32], [-4.18, -0.84, 0.56], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([1.06, 1.93, -227.32], [-5.23, 0.81, 0.57], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-2.06, -2.09965, -232.09965], [-2.09, -3.96, -0.57], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.y([-1.89958, -1.89, -227.12], [-0.99, -3.99, 0.62], [1.08, 2.02, 1.08], "32b34e", 0, 0, 0.6, false, 1.5, false);
        a.s([-0.52, 0.36, -229.72], 5.76, "32b34e", 0, 0, 0.6, false, false);
        a.p([0, -0.88, -106.5], [0, 0, 0], [62.6, 0.88, 125.2], "4d391f", 0, 0, 0.6, false, false, true, false);
        a.c([-4.49, 0.29, -187.59], "5dabba");
        a.c([0.28, 0.29, -210.88], "5dabba");
        a.c([-9.49, 0.29, -225.05], "5dabba");
        a.c([-4.31, 0.29, -240.32], "5dabba");
        a.p([10.08, -0.41, -291.92], [-0.77, 0, 0], [2.72, 0.18, 12.9], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([15.67, -0.41, -300.55], [-0.33, 0, 0], [2.68, 0.18, 9.72], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([2.42, -0.41, -283.79], [-0.76, 0, 0], [2.72, 0.18, 9.6], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([17.11, -0.41, -309.65], [0, 0, 0], [2.66, 0.18, 9.74], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([15.67, -0.41, -318.68], [0.33, 0, 0], [2.68, 0.18, 9.72], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([10.86, -0.41, -325.28], [0.95, 0, -0.01], [2.74, 0.18, 9.52], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -0.41, -269.53], [0, 0, 0], [3.2, 0.18, 24.26], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-1.39972, -0.41, -327.92], [-1.57, 0, 0], [2.76, 0.18, 18.62], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-13.65, -0.41, -325.28], [-0.95, 0, -0.01], [2.74, 0.18, 9.52], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-18.55, -0.41, -318.68], [-0.33, 0, 0], [2.68, 0.18, 9.72], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-19.96, -0.41, -310.89951], [0, 0, 0], [2.66, 0.18, 7.4], "6f7173,0.7", 0, 0, 0.6, false, false, false, false);
        a.p([-0.07, 1.08, -169.25], [-1.57, 0, 0], [1.06, 94.44, 138.92], "6fc7d6", 0, 0, 0.6, false, true, false, false);
        a.p([-0.07, 1.08, -44.13], [-1.57, 0, 0], [0.16, 94.44, 138.92], "6fc7d6", 0, 0, 0.6, false, true, false, false);
        a.p([29.54, 1.08, -107.72], [0, 0, 0], [0.16, 94.44, 126.98], "6fc7d6", 0, 0, 0.6, false, false, false, false);
        a.p([-30.75, 1.08, -107.72], [0, 0, 0], [0.16, 94.44, 126.98], "6fc7d6", 0, 0, 0.6, false, false, false, false);
        a.p([0, 48.41, -107.06], [0, 0, 0], [140.24, 0.88, 130.8], "6fc7d6", 0, 0, 0.6, false, false, false, false);
        a.y([16.96, 3.93, -90.39], [-0.07, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([8.65, 3.93, -77.69], [1, 0.37, -0.16], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-8.75, 3.93, -96.47], [2.7, -2.99, 3.22], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([6.74, 3.93, -78.34], [0, 0, 0], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-10.94, 3.12, -96.39993], [-0.07, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-13.98, 3.12, -105.67], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-4.29979, 3.93, -129.01], [1.97, 0, 0], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([9.38, 3.12, -150.75], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([23.48, 3.93, -111.77], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-14.89958, 3.93, -107.65], [4.67, -2.99, 3.22], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-5.82, 3.93, -144.64], [1.6, -0.19, 0.24], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([14.66, 3.93, -138.96], [1.97, 0, 0], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-4.46, 3.93, -131.03], [2.97, 0.37, -0.16], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-19.39986, 3.93, -133.69], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([9.09, 3.93, -105.82], [1.97, 0, -0.16], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([19.19, 3.93, -112.95], [1.97, 0, 0], [1.78, 11.36, 1.78], "729c4f", 0, 0, 0.6, false, 0.0, false);
        a.y([-0.08, 2.69, -39.19], [0, 0, 0], [2, 0.32, 2], "767b82", 0, 0, 0.6, false, 1, false);
        a.p([3.01, 0.75, -39.15], [0, 0, 0], [0.16, 3.5, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-3.32, 0.75, -39.15], [0, 0, 0], [0.16, 3.5, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-0.17, 2.51, -39.15], [0, 0, -1.57], [0.16, 6.52, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([20.56, 1.07, -130.23], [1.57, 2.16, -1.5], [3.56, 13.08, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([22.8, 0.17, -126.93], [-1.04, -0.42, -1.69], [3.56, 8.36, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([24.64, 1.26, -129.83], [-1.04, -0.42, -1.69], [6, 8.4, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-12.07, -0.93, -86.88], [0.22, -0.35, -1.78], [6, 8.4, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-10.17, -2.11, -84.06], [0.22, -0.35, -1.78], [3.56, 8.36, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-13.98, -0.88, -83.25], [0, -0.6, -1.72], [3.56, 13.08, 8.56], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-23.01, -2.38, -162.05], [1.32, 0.14, -1.93], [7.2, 10.06, 10.24], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-19.12, -3.3, -160.43], [1.32, 0.14, -1.93], [4.26, 10.02, 10.24], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-22.32, -1.32, -157.29993], [4.47, 3.26, -1.28], [4.28, 15.68, 10.24], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-4.39, 2.51, -168.52], [0, 0, -1.57], [0.16, 6.52, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-7.54, 0.75, -168.52], [0, 0, 0], [0.16, 3.5, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-1.21, 0.75, -168.52], [0, 0, 0], [0.16, 3.5, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.y([-4.29965, 2.69, -167.69], [0, 0, 0], [2, 0.32, 2], "767b82", 0, 0, 0.6, false, 1, false);
        a.y([0.11, 2.69, -260.07], [0, 0, 0], [2, 0.32, 2], "767b82", 0, 0, 0.6, false, 1, false);
        a.p([3.2, 1.12, -260.89], [0, 0, 0], [0.16, 2.82, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-3.13, 1.06, -260.89], [0, 0, 0], [0.16, 2.78, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([0.02, 2.51, -260.89], [0, 0, -1.57], [0.16, 6.52, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([0.02, -0.32, -260.89], [0, 0, -1.57], [0.16, 6.52, 8.64], "767b82", 0, 0, 0.6, false, false, false, false);
        a.p([-4.38, 0.75, -167.78], [-1.57, 0, 0], [0.16, 3.5, 6.26], "7792bf,0.9", 0, 0, 0.6, false, true, false, false);
        a.p([0.02, 1.1, -260.16], [-1.57, 0, 0], [0.16, 2.82, 6.26], "7792bf,0.9", 0, 0, 0.6, false, true, false, false);
        a.p([-0.14, 0.75, -39.59], [-1.57, 0, 0], [0.16, 3.5, 6.26], "7792bf,0.9", 0, 0, 0.6, false, true, false, false);
        a.p([0.35, 2.36, -116.16], [1.13, 0, 0], [4.12, 0.46, 0.44], "78221f", 0, 0, 0.6, false, false, false, false);
        a.p([-1.26, 2.36, -116.91], [1.13, 0, 0], [4.12, 0.46, 0.44], "78221f", 0, 0, 0.6, false, false, false, false);
        a.p([0.1, 2.87, -116.27], [1.13, 0, 0], [4.12, 0.46, 0.44], "78221f", 0, 0, 0.6, false, false, false, false);
        a.p([-0.43, 2.51, -116.52], [1.13, 0, 0], [4.12, 0.46, 0.44], "78221f", 0, 0, 0.6, false, false, false, false);
        a.p([-0.93, 2.87, -116.76], [1.13, 0, 0], [4.12, 0.46, 0.44], "78221f", 0, 0, 0.6, false, false, false, false);
        a.y([-10.21, 0.08, -207.52], [-0.68, -1.57, 0], [4.6, 8.58, 4.6], "7a302d", 0, 0, 0.6, false, 0.7, false);
        a.p([-14.93, -1.56, -203.99], [-0.68, 0.42, 0], [0.54, 0.48, 7.9], "7a302d", 0, 0, 0.6, false, false, false, false);
        a.p([-13.32, -0.97, -202.83], [-0.68, 0.22, 0], [0.54, 0.48, 7.9], "7a302d", 0, 0, 0.6, false, false, false, false);
        a.p([-13.17, -0.04, -203.05], [-0.68, 0.22, 0], [0.54, 0.48, 7.9], "7a302d", 0, 0, 0.6, false, false, false, false);
        a.p([-14.25, 0.76, -203.97], [-0.68, 0.12, 0], [0.54, 0.48, 7.9], "7a302d", 0, 0, 0.6, false, false, false, false);
        a.p([-12.39, 0.28, -202.3], [-0.68, 0.09, 0], [0.54, 0.48, 7.9], "7a302d", 0, 0, 0.6, false, false, false, false);
        a.y([6.54, 0.75, -251.66], [0, 2.25, -1.57], [4.52, 0.42, 4.52], "81a120", 0, 0, 0.6, false, 1, false);
        a.y([6.56, 0.75, -208.26], [0, 2.65, -1.57], [4.52, 0.42, 4.52], "81a120", 0, 0, 0.6, false, 1, false);
        a.y([-15.01, 0.75, -220.93], [0, 0.27, -1.57], [4.52, 0.42, 4.52], "81a120", 0, 0, 0.6, false, 1, false);
        a.y([-12.59, 3.18, -243.69], [0, 0.7, -1.57], [4.52, 0.42, 4.52], "81a120", 0, 0, 0.6, false, 1, false);
        a.p([-0.26, 2.24, -116.83], [1.13, 0, 0], [4.12, 2.18, 3.52], "854f22", 0, 0, 0.6, false, false, false, false);
        a.p([1.46, 3.36, -120.52], [1.13, 0, 0], [5.08, 3.5, 4.14], "854f22", 0, 0, 0.6, false, false, false, false);
        a.y([-3.06, -0.37, -120.64], [4.28, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-1.6, 2.16, -121.14], [4.28, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-2.61, -0.37, -121.61], [4.28, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-1.09986, 2.16, -122.22], [4.28, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-2.11, -0.37, -122.69], [4.28, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-0.62, 2.16, -123.25], [4.28, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([-1.63, -0.37, -123.72], [4.28, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([4.38, -0.37, -117.13], [1.13, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([3.38, 2.16, -117.59951], [1.13, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([4.86, -0.37, -118.15], [1.13, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([3.86, 2.16, -118.62], [1.13, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([4.36, 2.16, -119.69986], [1.13, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([5.37, -0.37, -119.23], [1.13, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([5.82, -0.37, -120.19972], [1.13, 0, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.y([4.81, 2.16, -120.67], [1.13, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.p([0, -0.46, -18.42], [0, 0, 0], [9.3, 0.18, 51.74], "948a78", 0, 0, 0.6, false, false, false, false);
        a.p([0, -0.46, -50.09951], [0, 0, 0], [7.06, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([0.09, -0.46, -61.8], [0, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-0.84, -0.46, -73.34], [0.17, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([0.57, -0.46, -84.21], [-0.43, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([2.91, -0.46, -95.19], [0, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-0.98, 0.47, -105.13], [0.75, 0.15, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-9.23, 0.43, -114.04], [0.75, -0.15, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-11.19, -0.46, -124.92], [-0.25, 0, 0], [2.12, 0.18, 15.26], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-9.31, -0.46, -138.12], [0, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-6.62, -0.46, -149.31], [-0.46, 0, 0], [2.12, 0.18, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.y([-2.05, 2.16, -120.17], [4.28, -0.87, 0], [0.64, 3.36, 0.64], "854f22", 0, 0, 0.6, false, 1, false);
        a.p([-4.07, -0.46, -163.06], [0, 0, 0], [2.12, 0.18, 17.94], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-0.98, -1.22, -105.13], [0.75, 0.15, 0], [2.12, 3.16, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.p([-8.85, -0.73, -113.61], [0.75, -0.15, 0], [2.12, 2.28, 12.34], "9c7c5c", 0, 0, 0.6, false, false, false, false);
        a.y([-12.48, 3.18, -243.59965], [0, 0.7, -1.57], [3.4, 0.32, 3.4], "cbcf5f", 0, 0, 0.6, false, 1, false);
        a.y([6.45, 0.75, -251.55], [0, 2.25, -1.57], [3.4, 0.32, 3.4], "cbcf5f", 0, 0, 0.6, false, 1, false);
        a.y([6.44, 0.75, -208.19951], [0, 2.65, -1.57], [3.4, 0.32, 3.4], "cbcf5f", 0, 0, 0.6, false, 1, false);
        a.y([-14.88, 0.75, -220.89], [0, 0.27, -1.57], [3.4, 0.32, 3.4], "cbcf5f", 0, 0, 0.6, false, 1, false);
        a.s([-1.02, 0.36, -307.97], 23.58, "ff1900", 0, 0, 0.6, false, false);
        a.s([-1.26, 0.02, -328.09], 5.22, "fffb00,0.7", 0, 0, 0.6, true, false);
        a.c([10.8, 0.31999999999999995, -325.41], "fffb00");
        a.c([15.8, 0.31999999999999995, -318.55], "fffb00");
        a.p([-4.17, 0.07, -37.61], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.p([3.86, 0.07, -37.61], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.e([-19.98, 0.02, -309.48]);
    },
    post: function() {
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#0a0a0a"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.33000000000000185) {
                    a.msg_set("Into the atomizer ");
                    speed = default_speed * 1.3;
                    a.d(1.5, 0.24, 1.5);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -40.19) {
                    a.msg_del();
                    speed = cc.get("speed", null);
                    a.d(null, null, null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -40.519999999999996) {
                    a.msg_set("Shrinking down: Insect Level ");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -59.56) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -92.94) {
                    a.msg_set("Sneak past the sleeping spider ");
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -127.97999999999999) {
                    a.msg_del();
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -156.54000000000002) {
                    a.msg_set("Shrinking down: Microorganism Level ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -167.82) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -167.83) {
                    a.d(0.5, 0.08, 0.5);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -260.03000000000003) {
                    a.d(null, null, null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -260.09000000000003) {
                    a.msg_set("Shrinking down: Atomic Level ");
                    speed = default_speed * 0.2;
                    a.d(0.5, null, 0.5);
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -263.39) {
                    a.msg_del();
                    speed = cc.get("speed", null);
                    a.d(null, null, null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -263.49) {
                    a.d(0.2, 0.03, 0.2);
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -343.54999999999995) {
                    a.d(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('S0', [-19.98, 0.02, -309.48], [0, 0, 0], [5.22, 5.22, 5.22]);
        a.re('C0', [-18.51, 0.31999999999999995, -318.88], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-13.83, 0.31999999999999995, -325.17], [0, 0, 0], [2, 2, 2]);
        a.re('P0', [-0.07, 1.08, -43.41], [-1.57, 0, 0], [0.16, 94.44, 138.92]);
        a.re('P1', [-0.07, 1.08, -263.37], [-1.57, 0, 0], [0.16, 94.44, 138.92]);
        a.re('S1', [17.23, 0.02, -309.6], [0, 0, 0], [5.22, 5.22, 5.22]);
        a.re('C2', [3.14, 0.31999999999999995, -284.54], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [15.68, 0.31999999999999995, -300.51], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [10.55, 0.31999999999999995, -292.37], [0, 0, 0], [2, 2, 2]);
        a.re('Y0', [-4.29972, 3.29, -167.69], [0, 0, 0], [1.28, 1.06, 1.28]);
        a.re('Y1', [0.11, 3.29, -260.07], [0, 0, 0], [1.28, 1.06, 1.28]);
        a.re('Y2', [-0.08, 3.29, -39.19], [0, 0, 0], [1.28, 1.06, 1.28]);
        a.re('P2', [-1.99, -0.41, -195.91], [-0.24, 0, 0], [2.12, 0.18, 17.94]);
        a.re('P3', [-4.48, -0.41, -217.81], [0.58, 0, 0], [2.12, 0.18, 17.94]);
        a.re('P4', [0.05, -0.41, -207.55], [0, 0, 0], [2.12, 0.18, 7.62]);
        a.re('P5', [-8.34, -0.41, -228.89], [-0.18, 0, 0], [2.12, 0.18, 9]);
        a.re('P6', [-3.71, -0.41, -241.61], [-0.42, 0, 0], [2.12, 0.18, 19.4]);
        a.re('P7', [0.07, -0.41, -255.79], [0.01, 0, 0], [2.12, 0.18, 11.92]);
        a.re('P8', [-4.07, -0.41, -178.66], [0, 0, 0], [2.12, 0.18, 17.94]);
        a.re('P9', [-0.07, 1.08, -261.84], [-1.57, 0, 0], [1.06, 94.44, 138.92]);
        a.re('P10', [-2.79951, -5.62, -215.55], [0, 0, 0], [46.9, 0.88, 92.2]);
        a.re('P11', [-2.8, -11.11, -215.21], [0, 0, 0], [46.9, 0.88, 92.2]);
        a.re('P12', [-25.82, 1.08, -215.74], [0, 0, 0], [0.16, 94.44, 92.52]);
        a.re('P13', [18.74, 1.08, -216.08], [0, 0, 0], [0.16, 92.52, 94.04]);
        a.re('Y3', [-0.44, 3.85, -229.72], [0, 0, 0], [1.08, 2.02, 1.08]);
        a.re('Y4', [1.02, -1.85, -227.12], [-2.17, -2.27, 0.6], [1.08, 2.02, 1.08]);
        a.re('Y5', [-0.44, -0.04, -226.25], [-3.14, -1.57, 0], [1.08, 2.02, 1.08]);
        a.re('Y6', [-0.44, -0.04, -233.24], [0, -1.57, 0], [1.08, 2.02, 1.08]);
        a.re('Y7', [-3.99951, -0.04, -229.64], [-4.71, -1.57, 0], [1.08, 2.02, 1.08]);
        a.re('Y8', [3.01, -0.04, -229.64], [-1.57, -1.57, 0], [1.08, 2.02, 1.08]);
        a.re('Y9', [-0.44, -3.31, -229.72], [0, 0, 3.14], [1.08, 2.02, 1.08]);
        a.re('Y10', [-2.02, 1.85, -232.23], [-5.31, -0.88, -0.6], [1.08, 2.02, 1.08]);
        a.re('Y11', [-2.05, 1.89, -227.32], [-4.18, -0.84, 0.56], [1.08, 2.02, 1.08]);
        a.re('Y12', [1.06, 1.93, -227.32], [-5.23, 0.81, 0.57], [1.08, 2.02, 1.08]);
        a.re('Y13', [-2.06, -2.09965, -232.09965], [-2.09, -3.96, -0.57], [1.08, 2.02, 1.08]);
        a.re('Y14', [-1.89958, -1.89, -227.12], [-0.99, -3.99, 0.62], [1.08, 2.02, 1.08]);
        a.re('S2', [-0.52, 0.36, -229.72], [0, 0, 0], [5.76, 5.76, 5.76]);
        a.re('P14', [0, -0.88, -106.5], [0, 0, 0], [62.6, 0.88, 125.2]);
        a.re('C5', [-4.49, 0.29, -187.59], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [0.28, 0.29, -210.88], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-9.49, 0.29, -225.05], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-4.31, 0.29, -240.32], [0, 0, 0], [2, 2, 2]);
        a.re('P15', [10.08, -0.41, -291.92], [-0.77, 0, 0], [2.72, 0.18, 12.9]);
        a.re('P16', [15.67, -0.41, -300.55], [-0.33, 0, 0], [2.68, 0.18, 9.72]);
        a.re('P17', [2.42, -0.41, -283.79], [-0.76, 0, 0], [2.72, 0.18, 9.6]);
        a.re('P18', [17.11, -0.41, -309.65], [0, 0, 0], [2.66, 0.18, 9.74]);
        a.re('P19', [15.67, -0.41, -318.68], [0.33, 0, 0], [2.68, 0.18, 9.72]);
        a.re('P20', [10.86, -0.41, -325.28], [0.95, 0, -0.01], [2.74, 0.18, 9.52]);
        a.re('P21', [0.04, -0.41, -269.53], [0, 0, 0], [3.2, 0.18, 24.26]);
        a.re('P22', [-1.39972, -0.41, -327.92], [-1.57, 0, 0], [2.76, 0.18, 18.62]);
        a.re('P23', [-13.65, -0.41, -325.28], [-0.95, 0, -0.01], [2.74, 0.18, 9.52]);
        a.re('P24', [-18.55, -0.41, -318.68], [-0.33, 0, 0], [2.68, 0.18, 9.72]);
        a.re('P25', [-19.96, -0.41, -310.89951], [0, 0, 0], [2.66, 0.18, 7.4]);
        a.re('P26', [-0.07, 1.08, -169.25], [-1.57, 0, 0], [1.06, 94.44, 138.92]);
        a.re('P27', [-0.07, 1.08, -44.13], [-1.57, 0, 0], [0.16, 94.44, 138.92]);
        a.re('P28', [29.54, 1.08, -107.72], [0, 0, 0], [0.16, 94.44, 126.98]);
        a.re('P29', [-30.75, 1.08, -107.72], [0, 0, 0], [0.16, 94.44, 126.98]);
        a.re('P30', [0, 48.41, -107.06], [0, 0, 0], [140.24, 0.88, 130.8]);
        a.re('Y15', [16.96, 3.93, -90.39], [-0.07, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y16', [8.65, 3.93, -77.69], [1, 0.37, -0.16], [1.78, 11.36, 1.78]);
        a.re('Y17', [-8.75, 3.93, -96.47], [2.7, -2.99, 3.22], [1.78, 11.36, 1.78]);
        a.re('Y18', [6.74, 3.93, -78.34], [0, 0, 0], [1.78, 11.36, 1.78]);
        a.re('Y19', [-10.94, 3.12, -96.39993], [-0.07, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y20', [-13.98, 3.12, -105.67], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y21', [-4.29979, 3.93, -129.01], [1.97, 0, 0], [1.78, 11.36, 1.78]);
        a.re('Y22', [9.38, 3.12, -150.75], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y23', [23.48, 3.93, -111.77], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y24', [-14.89958, 3.93, -107.65], [4.67, -2.99, 3.22], [1.78, 11.36, 1.78]);
        a.re('Y25', [-5.82, 3.93, -144.64], [1.6, -0.19, 0.24], [1.78, 11.36, 1.78]);
        a.re('Y26', [14.66, 3.93, -138.96], [1.97, 0, 0], [1.78, 11.36, 1.78]);
        a.re('Y27', [-4.46, 3.93, -131.03], [2.97, 0.37, -0.16], [1.78, 11.36, 1.78]);
        a.re('Y28', [-19.39986, 3.93, -133.69], [1.91, 0.33, 0.19], [1.78, 11.36, 1.78]);
        a.re('Y29', [9.09, 3.93, -105.82], [1.97, 0, -0.16], [1.78, 11.36, 1.78]);
        a.re('Y30', [19.19, 3.93, -112.95], [1.97, 0, 0], [1.78, 11.36, 1.78]);
        a.re('Y31', [-0.08, 2.69, -39.19], [0, 0, 0], [2, 0.32, 2]);
        a.re('P31', [3.01, 0.75, -39.15], [0, 0, 0], [0.16, 3.5, 8.64]);
        a.re('P32', [-3.32, 0.75, -39.15], [0, 0, 0], [0.16, 3.5, 8.64]);
        a.re('P33', [-0.17, 2.51, -39.15], [0, 0, -1.57], [0.16, 6.52, 8.64]);
        a.re('P34', [20.56, 1.07, -130.23], [1.57, 2.16, -1.5], [3.56, 13.08, 8.56]);
        a.re('P35', [22.8, 0.17, -126.93], [-1.04, -0.42, -1.69], [3.56, 8.36, 8.56]);
        a.re('P36', [24.64, 1.26, -129.83], [-1.04, -0.42, -1.69], [6, 8.4, 8.56]);
        a.re('P37', [-12.07, -0.93, -86.88], [0.22, -0.35, -1.78], [6, 8.4, 8.56]);
        a.re('P38', [-10.17, -2.11, -84.06], [0.22, -0.35, -1.78], [3.56, 8.36, 8.56]);
        a.re('P39', [-13.98, -0.88, -83.25], [0, -0.6, -1.72], [3.56, 13.08, 8.56]);
        a.re('P40', [-23.01, -2.38, -162.05], [1.32, 0.14, -1.93], [7.2, 10.06, 10.24]);
        a.re('P41', [-19.12, -3.3, -160.43], [1.32, 0.14, -1.93], [4.26, 10.02, 10.24]);
        a.re('P42', [-22.32, -1.32, -157.29993], [4.47, 3.26, -1.28], [4.28, 15.68, 10.24]);
        a.re('P43', [-4.39, 2.51, -168.52], [0, 0, -1.57], [0.16, 6.52, 8.64]);
        a.re('P44', [-7.54, 0.75, -168.52], [0, 0, 0], [0.16, 3.5, 8.64]);
        a.re('P45', [-1.21, 0.75, -168.52], [0, 0, 0], [0.16, 3.5, 8.64]);
        a.re('Y32', [-4.29965, 2.69, -167.69], [0, 0, 0], [2, 0.32, 2]);
        a.re('Y33', [0.11, 2.69, -260.07], [0, 0, 0], [2, 0.32, 2]);
        a.re('P46', [3.2, 1.12, -260.89], [0, 0, 0], [0.16, 2.82, 8.64]);
        a.re('P47', [-3.13, 1.06, -260.89], [0, 0, 0], [0.16, 2.78, 8.64]);
        a.re('P48', [0.02, 2.51, -260.89], [0, 0, -1.57], [0.16, 6.52, 8.64]);
        a.re('P49', [0.02, -0.32, -260.89], [0, 0, -1.57], [0.16, 6.52, 8.64]);
        a.re('P50', [-4.38, 0.75, -167.78], [-1.57, 0, 0], [0.16, 3.5, 6.26]);
        a.re('P51', [0.02, 1.1, -260.16], [-1.57, 0, 0], [0.16, 2.82, 6.26]);
        a.re('P52', [-0.14, 0.75, -39.59], [-1.57, 0, 0], [0.16, 3.5, 6.26]);
        a.re('P53', [0.35, 2.36, -116.16], [1.13, 0, 0], [4.12, 0.46, 0.44]);
        a.re('P54', [-1.26, 2.36, -116.91], [1.13, 0, 0], [4.12, 0.46, 0.44]);
        a.re('P55', [0.1, 2.87, -116.27], [1.13, 0, 0], [4.12, 0.46, 0.44]);
        a.re('P56', [-0.43, 2.51, -116.52], [1.13, 0, 0], [4.12, 0.46, 0.44]);
        a.re('P57', [-0.93, 2.87, -116.76], [1.13, 0, 0], [4.12, 0.46, 0.44]);
        a.re('Y34', [-10.21, 0.08, -207.52], [-0.68, -1.57, 0], [4.6, 8.58, 4.6]);
        a.re('P58', [-14.93, -1.56, -203.99], [-0.68, 0.42, 0], [0.54, 0.48, 7.9]);
        a.re('P59', [-13.32, -0.97, -202.83], [-0.68, 0.22, 0], [0.54, 0.48, 7.9]);
        a.re('P60', [-13.17, -0.04, -203.05], [-0.68, 0.22, 0], [0.54, 0.48, 7.9]);
        a.re('P61', [-14.25, 0.76, -203.97], [-0.68, 0.12, 0], [0.54, 0.48, 7.9]);
        a.re('P62', [-12.39, 0.28, -202.3], [-0.68, 0.09, 0], [0.54, 0.48, 7.9]);
        a.re('Y35', [6.54, 0.75, -251.66], [0, 2.25, -1.57], [4.52, 0.42, 4.52]);
        a.re('Y36', [6.56, 0.75, -208.26], [0, 2.65, -1.57], [4.52, 0.42, 4.52]);
        a.re('Y37', [-15.01, 0.75, -220.93], [0, 0.27, -1.57], [4.52, 0.42, 4.52]);
        a.re('Y38', [-12.59, 3.18, -243.69], [0, 0.7, -1.57], [4.52, 0.42, 4.52]);
        a.re('P63', [-0.26, 2.24, -116.83], [1.13, 0, 0], [4.12, 2.18, 3.52]);
        a.re('P64', [1.46, 3.36, -120.52], [1.13, 0, 0], [5.08, 3.5, 4.14]);
        a.re('Y39', [-3.06, -0.37, -120.64], [4.28, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y40', [-1.6, 2.16, -121.14], [4.28, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y41', [-2.61, -0.37, -121.61], [4.28, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y42', [-1.09986, 2.16, -122.22], [4.28, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y43', [-2.11, -0.37, -122.69], [4.28, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y44', [-0.62, 2.16, -123.25], [4.28, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y45', [-1.63, -0.37, -123.72], [4.28, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y46', [4.38, -0.37, -117.13], [1.13, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y47', [3.38, 2.16, -117.59951], [1.13, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y48', [4.86, -0.37, -118.15], [1.13, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y49', [3.86, 2.16, -118.62], [1.13, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y50', [4.36, 2.16, -119.69986], [1.13, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('Y51', [5.37, -0.37, -119.23], [1.13, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y52', [5.82, -0.37, -120.19972], [1.13, 0, 0], [0.64, 3.36, 0.64]);
        a.re('Y53', [4.81, 2.16, -120.67], [1.13, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('P65', [0, -0.46, -18.42], [0, 0, 0], [9.3, 0.18, 51.74]);
        a.re('P66', [0, -0.46, -50.09951], [0, 0, 0], [7.06, 0.18, 12.34]);
        a.re('P67', [0.09, -0.46, -61.8], [0, 0, 0], [2.12, 0.18, 12.34]);
        a.re('P68', [-0.84, -0.46, -73.34], [0.17, 0, 0], [2.12, 0.18, 12.34]);
        a.re('P69', [0.57, -0.46, -84.21], [-0.43, 0, 0], [2.12, 0.18, 12.34]);
        a.re('P70', [2.91, -0.46, -95.19], [0, 0, 0], [2.12, 0.18, 12.34]);
        a.re('P71', [-0.98, 0.47, -105.13], [0.75, 0.15, 0], [2.12, 0.18, 12.34]);
        a.re('P72', [-9.23, 0.43, -114.04], [0.75, -0.15, 0], [2.12, 0.18, 12.34]);
        a.re('P73', [-11.19, -0.46, -124.92], [-0.25, 0, 0], [2.12, 0.18, 15.26]);
        a.re('P74', [-9.31, -0.46, -138.12], [0, 0, 0], [2.12, 0.18, 12.34]);
        a.re('P75', [-6.62, -0.46, -149.31], [-0.46, 0, 0], [2.12, 0.18, 12.34]);
        a.re('Y54', [-2.05, 2.16, -120.17], [4.28, -0.87, 0], [0.64, 3.36, 0.64]);
        a.re('P76', [-4.07, -0.46, -163.06], [0, 0, 0], [2.12, 0.18, 17.94]);
        a.re('P77', [-0.98, -1.22, -105.13], [0.75, 0.15, 0], [2.12, 3.16, 12.34]);
        a.re('P78', [-8.85, -0.73, -113.61], [0.75, -0.15, 0], [2.12, 2.28, 12.34]);
        a.re('Y55', [-12.48, 3.18, -243.59965], [0, 0.7, -1.57], [3.4, 0.32, 3.4]);
        a.re('Y56', [6.45, 0.75, -251.55], [0, 2.25, -1.57], [3.4, 0.32, 3.4]);
        a.re('Y57', [6.44, 0.75, -208.19951], [0, 2.65, -1.57], [3.4, 0.32, 3.4]);
        a.re('Y58', [-14.88, 0.75, -220.89], [0, 0.27, -1.57], [3.4, 0.32, 3.4]);
        a.re('S3', [-1.02, 0.36, -307.97], [0, 0, 0], [23.58, 23.58, 23.58]);
        a.re('S4', [-1.26, 0.02, -328.09], [0, 0, 0], [5.22, 5.22, 5.22]);
        a.re('C9', [10.8, 0.31999999999999995, -325.41], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [15.8, 0.31999999999999995, -318.55], [0, 0, 0], [2, 2, 2]);
        a.re('P79', [-4.17, 0.07, -37.61], [0, 0, 0], [2, 2, 2]);
        a.re('P80', [3.86, 0.07, -37.61], [0, 0, 0], [2, 2, 2]);
        a.re('E0', [-19.98, 0.02, -309.48], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}