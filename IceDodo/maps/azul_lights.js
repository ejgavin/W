var map = {
    title: "Azul Lights",
    song: "env2",
    maker: "Wienerdog & Bumpo",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([-24.99, 0, -69.97], [0, 0, 0.79], [2, 200, 2], "0a0a0a", 0, 0, 0.6, false, 1, true);
        a.y([-24.98, 0, -69.97], [0, 0, -0.79], [2, 200, 2], "0a0a0a", 0, 0, 0.6, false, 1, true);
        a.p([-4.87, 0.86, -108.09993], [0, 0, 0], [11.86, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-40.18, 0.86, -92.44], [0, 0, 0], [11.86, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-41.47, 0.86, -101.88], [0, 0, 0], [11.86, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-19.69, 0.86, -149.23], [0, 0, 0], [11.86, 2, 15.18], "0a0a0a", 0, 0, 0.6, false, false, true, false);
        a.p([-33.62, 0.86, -149.23], [0, 0, 0], [11.86, 2, 15.18], "0a0a0a", 0, 0, 0.6, false, false, true, false);
        a.p([-31.87, 0.86, -152.06], [0, 0, 0], [1.82, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-25.73, 0.86, -152.06], [0, 0, 0], [9.66, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-27.85, 0.86, -170.77], [0, 0, 0], [9.66, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-21.66, 0.86, -170.77], [0, 0, 0], [1.82, 2, 6], "0a0a0a,0.5", 0, 0, 0.6, false, false, true, false);
        a.c([0.48, 0.53, -9.69986], "0a0a0a");
        a.c([-0.72, 0.020000000000000018, -11.16], "0a0a0a");
        a.c([-3.89972, -1.63, -18.67], "0a0a0a");
        a.c([-2.84, -1.63, -24.95], "0a0a0a");
        a.c([-3.34, -1.63, -27.51], "0a0a0a");
        a.c([-7.82, -1.63, -37.03], "0a0a0a");
        a.p([-7.05, -3.45, -7.54], [0, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-7.05, 1.52, -7.54], [0, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-6.16, 6.91, -7.54], [0, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([6.43, -3.45, -20.12], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([5.54, 6.91, -20.12], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([6.43, 1.52, -20.12], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([1.72, 0.73, -33.28], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([0.83, 6.12, -33.28], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([1.72, -4.25, -33.28], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-23.35, 5.76, -49.73], [0, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-24.24, 0.37, -49.73], [0, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-24.24, -4.59979, -49.73], [0, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-34.61, -4.59972, -99.94], [0, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-34.61, 0.37, -99.94], [0, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-33.72, 5.76, -99.94], [0, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-15.32, 7.84, -95.59951], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-14.43, 2.45, -95.6], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-14.43, -2.53, -95.59993], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-16.76, -2.53, -161.59986], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-16.76, 2.45, -161.59979], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-17.65, 7.84, -161.59972], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-20.27, 7.84, -226.69965], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, 2.45, -226.69958], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, -2.53, -226.69951], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, -2.53, -255.7], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, 2.45, -255.69993], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-20.27, 7.84, -255.69986], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-20.27, 7.84, -274.69979], [-3.14, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, 2.45, -274.69972], [-3.14, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-19.38, -2.53, -274.69965], [-3.14, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-35.87, -2.53, -235.05], [-6.2, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-35.87, 2.45, -235.05], [-6.2, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-34.98, 7.84, -235.13], [-6.2, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-34.98, 7.84, -317.62], [-6.2, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-35.87, 2.45, -317.54], [-6.2, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-35.87, -2.53, -317.54], [-6.2, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-11.42, -1.46, -354.42], [-9.42, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-11.42, 3.51, -354.42], [-9.42, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-12.31, 8.9, -354.42], [-9.42, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-11.31, 8.9, -431.89], [-9.42, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-10.42, 3.51, -431.89], [-9.42, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-10.42, -1.46, -431.89], [-9.42, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-29.25, -1.46, -432.14], [-12.65, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-29.25, 3.51, -432.14], [-12.65, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-28.37, 8.9, -432.06], [-12.65, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-28.37, 8.9, -374.94], [-12.65, 0, 0], [3.94, 1.34, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-29.25, 3.51, -375.02], [-12.65, 0, 0], [2, 10.06, 2], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.p([-29.25, -1.46, -375.02], [-12.65, 0, 0], [4.04, 0.94, 5.1], "0c0f11", 0, 0, 0.6, false, false, false, false);
        a.c([-18.96, 2.85, -437.7], "0d47a1");
        a.c([-19.96, 2.85, -434.69993], "0d47a1");
        a.c([-19.96, 2.85, -437.69986], "0d47a1");
        a.c([-18.96, 2.85, -434.69979], "0d47a1");
        a.p([-25.98, -1.09972, -191.53], [0.6, 0, 0], [0.3, 2, 11.44], "0d47a1", 0, 0, 0.6, false, false, false, false);
        a.c([-20.96, 2.85, -434.69965], "0d47a1");
        a.c([-20.96, 2.85, -437.69958], "0d47a1");
        a.p([-28.46, -1.09951, -267.95], [0, 0, 0], [9.64, 2, 124.8], "0e2b58", 0, 0, 0.6, false, false, false, false);
        a.p([-20.28, 1.4, -391.62], [0, 0, 0], [11.86, 2, 106.76], "0e2b58", 0, 0, 0.6, false, false, false, false);
        a.p([-24.47, 0.7, -333.22], [-0.3, 0.38, 0], [5.1, 2, 11.86], "0e2b58", 0, 0, 0.6, false, false, false, false);
        a.p([-7.41, 0.91, -42.14], [0, 0, -0.35], [4.66, 0.68, 1.18], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-7.41, 2.49, -42.14], [0, 0, 0.43], [4.66, 0.68, 1.18], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-5.71, 2.29, -42.14], [0, 0, 0.43], [3.22, 0.48, 0.82], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-5.71, 1.2, -42.14], [0, 0, -0.35], [3.22, 0.48, 0.82], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-31.75, 1.2, -345.55], [0, 0, 0.42], [3.22, 0.48, 0.82], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-31.75, 2.29, -345.55], [0, 0, -0.42], [3.22, 0.48, 0.82], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-29.9, 2.49, -345.55], [0, 0, -0.42], [4.66, 0.68, 1.18], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-29.89993, 0.91, -345.55], [0, 0, 0.42], [4.66, 0.68, 1.18], "1093fb", 0, 0, 0.6, false, false, false, false);
        a.p([-29.55, 0.37, -323.83], [0, 0, 0], [7.56, 2, 2], "1f3f70,0.5", 0, 0, 0.6, false, false, true, false);
        a.p([-27.34, 0.37, -248.37], [0, 0, 0], [8.34, 2, 2], "1f3f70,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([-29.55, 0.37, -265.83], [0, 0, 0], [7.58, 2, 2], "1f3f70,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([-27.36, 0.37, -297.59965], [0, 0, 0], [8.36, 2, 20.86], "1f3f70,0.7", 0, 0, 0.6, false, false, true, false);
        a.p([-24.77, -1.08, -96.86], [-1.57, 0, 0], [1.92, 2, 7.96], "22257d", 0, 0, 0.6, false, true, false, false);
        a.p([-29.19951, -1.08, -101.49], [0, 0, 0], [1.92, 2, 11.2], "22257d", 0, 0, 0.6, false, true, false, false);
        a.p([-27.53, -1.08, -106.1], [-1.57, 0, 0], [1.92, 2, 3.7], "22257d", 0, 0, 0.6, false, true, false, false);
        a.p([-21.72, -1.08, -92.14], [0, 0, 0], [1.92, 2, 11.2], "22257d", 0, 0, 0.6, false, true, false, false);
        a.p([-26.65, -1.08, -108.91], [0, 0, 0], [1.92, 2, 7.52], "22257d", 0, 0, 0.6, false, true, false, false);
        a.p([-22.32, -1.96, -55.63], [0.46, 0.23, 0], [1.4, 2, 10.66], "22257d", 0, 0, 0.6, true, false, false, false);
        a.p([-15.61, -3.18, -48.39], [1.05, 0, 0], [1.4, 2, 10.66], "22257d", 0, 0, 0.6, false, false, false, false);
        a.p([-5.49965, -3.18, -33.05], [0.43, 0, 0], [2.34, 2, 10.66], "22257d", 0, 0, 0.6, false, false, false, false);
        a.p([-8.89958, -3.18, -41.19], [0.46, 0, 0], [1.4, 2, 10.66], "22257d", 0, 0, 0.6, false, false, false, false);
        a.p([-24.38, 3.23, -388.78], [0, 0, 0], [4.06, 3.06, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-20.31, 3.23, -412.07], [0, 0, 0], [9.68, 3.06, 17.6], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-20.43, 3.23, -380.28], [0, 0, 0], [5.56, 4.42, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-20.43, 3.23, -366.72], [0, 0, 0], [3.06, 3.06, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-24.55, 3.23, -360.29], [0, 0, 0], [3.06, 3.06, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-15.79972, 3.23, -360.29], [0, 0, 0], [3.06, 3.06, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.p([-16.27, 3.23, -388.78], [0, 0, 0], [4.06, 3.06, 3.06], "2b83da,0.6", 0, 0, 0.6, false, false, true, false);
        a.c([-20.11, 2.8200000000000003, -360.16], "2b83da,0.5");
        a.c([-15.18, 2.8200000000000003, -366.09951], "2b83da,0.5");
        a.c([-24.94, 2.8200000000000003, -366.1], "2b83da,0.5");
        a.c([-22.72, 2.8200000000000003, -372.65], "2b83da,0.5");
        a.c([-17.56, 2.8200000000000003, -372.65], "2b83da,0.5");
        a.p([0, -1.09979, -15.37], [0, 0, 0], [2.34, 2, 10.66], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-26.71, -1.09972, -156.24], [0, 0, 0], [3.1, 2, 29.04], "363bb5", 0, 0, 0.6, true, false, false, false);
        a.p([-25.05, 6.58, -86.22], [0, 0, -1.57], [11.86, 10.8, 1.08], "363bb5,0.4", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.09958, -4.77], [0, 0, 0], [2.34, 2, 10.66], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-3.37, -3.05, -23.39951], [0, 0, 0], [2.34, 2, 10.66], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-25.05, -1.1, -96.9], [0, 0, 0], [11.86, 2, 31.6], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-26.74, -1.09993, -156.05], [0, 0, 0], [11.86, 2, 40.28], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-22.77, -1.09986, -181.28], [0, 0, 0], [0.3, 2, 11.28], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-29.19979, -1.13, -201.85], [0, 0, 0], [0.3, 2, 11.28], "363bb5", 0, 0, 0.6, false, false, false, false);
        a.p([-2.83, -1.95, -18.14], [0, 0, 0], [1.2, 3.8, 0.18], "-1.0", 0, 0, 0.6, true, true, false, false);
        a.p([-2.25, -1.95, -19.97], [0, 0, 0], [0.16, 3.8, 3.82], "-1.0", 0, 0, 0.6, true, true, false, false);
        a.p([-16.25, -4.16, -46.93], [0, 0, 0], [22.38, 2.12, 29.9], "-1.0", 0, 0, 0.6, false, false, true, false);
        a.p([-2.97, -3.05, -19.54], [0, 0, 0], [2.04, 2, 2.9], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.y([38.6, 0.83, -40.04], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-45.75, 0.83, -40.04], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-53.63, 0.83, -263.51], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([8.55, 0.83, -210.29], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([8.55, 0.83, -139.04], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-55.49993, 0.83, -139.04], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([7.52, 0.83, -320.96], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-54.23, 0.83, -370.42], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([13.21, 0.83, -449.48], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-46.79, 0.83, -449.48], [0, 0, 0], [37.2, 37.2, 37.2], "0a608f", 0, 0, 0.6, false, -1.0, false);
        a.y([-2.59, 2.11, -7.27], [0, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([1.97, 2.11, -20.39], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-2.74, 1.31, -33.55], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-19.78, 0.96, -49.46], [0, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-30.15, 0.96, -99.67], [0, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-18.89, 3.03, -95.87], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-21.22, 3.03, -161.87], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-23.84, 3.03, -226.97], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-23.84, 3.03, -255.97], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-23.84, 3.03, -274.97], [-3.14, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-31.4, 3.03, -235.17], [-6.2, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-31.39993, 3.03, -317.66], [-6.2, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-15.88, 4.1, -354.69], [-9.42, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-14.88, 4.1, -432.16], [-9.42, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-24.83, 4.1, -431.48], [-12.65, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.y([-24.83, 4.1, -374.36], [-12.65, 0, 0.62], [2, 10.34, 2], "14155c,0.3", 0, 0, 0.6, true, 0.25, false);
        a.e([-20.07, 2.4, -436.15]);
    },
    post: function() {
        a.u('Y0');
        a.u('Y1');
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P89');
        a.u('P90');
        cc.set_monkey("light.intensity", 2.5);
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#10147d"));
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
                if (PZ < -8.22) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P89', 'z', 2.0);
                if (PZ < -11.62) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -15.140000000000002) {
                    a.msg_set("Prepare for speed! ");
                    a.jh(0.0);
                    a.js(0.0);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -31.700000000000003) {
                    a.msg_del();
                    a.jh(null);
                    a.js(null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -32.2) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#15163b");
                    speed = default_speed * 1.7;
                    steer = default_steer * 1.6;
                    a.js(3.0);
                    this.section_id += 1
                }
                break;
            case 5:
                a.rot('Y0', 'z', -3.0);
                a.rot('Y1', 'z', 3.0);
                if (PZ < -63.86) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.js(null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -64.11) {
                    this.section_id += 1
                }
                break;
            case 7:
                a.rot('Y0', 'z', -3.0);
                a.rot('Y1', 'z', 3.0);
                if (PZ < -79.42999999999999) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -81.47) {
                    a.msg_set("Follow the path! ");
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -87.85) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -87.98) {
                    speed = default_speed * 0.7;
                    steer = default_steer * 2.7;
                    this.section_id += 1
                }
                break;
            case 11:
                a.mov('P0', 'x', -1.0);
                a.mov('P1', 'x', 1.0);
                a.mov('P2', 'x', 1.0);
                a.mov('P3', 'z', 1.0);
                a.mov('P4', 'z', 1.0);
                a.mov('P90', 'z', 1.0);
                if (PZ < -122.54) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -136.81) {
                    speed = default_speed * 0.4;
                    steer = default_steer * 1.3;
                    a.d(0.45, null, null);
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -213.14999999999998) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.d(null, null, null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -217.01) {
                    speed = default_speed * 2.0;
                    steer = default_steer * 1.5;
                    scene.clearColor = new BABYLON.Color3.FromHexString("#0d47a1");
                    a.cam_d(3.0);
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -334.11) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    a.cam_d(null);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -344.84999999999997) {
                    steer = default_steer * 1.4;
                    speed = default_speed * 1.7;
                    a.cam_d(3.0);
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -426.57) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    a.cam_d(null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [-24.99, 0, -69.97], [0, 0, 0.79], [2, 200, 2]);
        a.re('Y1', [-24.98, 0, -69.97], [0, 0, -0.79], [2, 200, 2]);
        a.re('P0', [-4.87, 0.86, -108.09993], [0, 0, 0], [11.86, 2, 6]);
        a.re('P1', [-40.18, 0.86, -92.44], [0, 0, 0], [11.86, 2, 6]);
        a.re('P2', [-41.47, 0.86, -101.88], [0, 0, 0], [11.86, 2, 6]);
        a.re('P3', [-19.69, 0.86, -149.23], [0, 0, 0], [11.86, 2, 15.18]);
        a.re('P4', [-33.62, 0.86, -149.23], [0, 0, 0], [11.86, 2, 15.18]);
        a.re('P5', [-31.87, 0.86, -152.06], [0, 0, 0], [1.82, 2, 6]);
        a.re('P6', [-25.73, 0.86, -152.06], [0, 0, 0], [9.66, 2, 6]);
        a.re('P7', [-27.85, 0.86, -170.77], [0, 0, 0], [9.66, 2, 6]);
        a.re('P8', [-21.66, 0.86, -170.77], [0, 0, 0], [1.82, 2, 6]);
        a.re('C0', [0.48, 0.53, -9.69986], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-0.72, 0.020000000000000018, -11.16], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-3.89972, -1.63, -18.67], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-2.84, -1.63, -24.95], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-3.34, -1.63, -27.51], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-7.82, -1.63, -37.03], [0, 0, 0], [2, 2, 2]);
        a.re('P9', [-7.05, -3.45, -7.54], [0, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P10', [-7.05, 1.52, -7.54], [0, 0, 0], [2, 10.06, 2]);
        a.re('P11', [-6.16, 6.91, -7.54], [0, 0, 0], [3.94, 1.34, 2]);
        a.re('P12', [6.43, -3.45, -20.12], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P13', [5.54, 6.91, -20.12], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P14', [6.43, 1.52, -20.12], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P15', [1.72, 0.73, -33.28], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P16', [0.83, 6.12, -33.28], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P17', [1.72, -4.25, -33.28], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P18', [-23.35, 5.76, -49.73], [0, 0, 0], [3.94, 1.34, 2]);
        a.re('P19', [-24.24, 0.37, -49.73], [0, 0, 0], [2, 10.06, 2]);
        a.re('P20', [-24.24, -4.59979, -49.73], [0, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P21', [-34.61, -4.59972, -99.94], [0, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P22', [-34.61, 0.37, -99.94], [0, 0, 0], [2, 10.06, 2]);
        a.re('P23', [-33.72, 5.76, -99.94], [0, 0, 0], [3.94, 1.34, 2]);
        a.re('P24', [-15.32, 7.84, -95.59951], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P25', [-14.43, 2.45, -95.6], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P26', [-14.43, -2.53, -95.59993], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P27', [-16.76, -2.53, -161.59986], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P28', [-16.76, 2.45, -161.59979], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P29', [-17.65, 7.84, -161.59972], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P30', [-20.27, 7.84, -226.69965], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P31', [-19.38, 2.45, -226.69958], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P32', [-19.38, -2.53, -226.69951], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P33', [-19.38, -2.53, -255.7], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P34', [-19.38, 2.45, -255.69993], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P35', [-20.27, 7.84, -255.69986], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P36', [-20.27, 7.84, -274.69979], [-3.14, 0, 0], [3.94, 1.34, 2]);
        a.re('P37', [-19.38, 2.45, -274.69972], [-3.14, 0, 0], [2, 10.06, 2]);
        a.re('P38', [-19.38, -2.53, -274.69965], [-3.14, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P39', [-35.87, -2.53, -235.05], [-6.2, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P40', [-35.87, 2.45, -235.05], [-6.2, 0, 0], [2, 10.06, 2]);
        a.re('P41', [-34.98, 7.84, -235.13], [-6.2, 0, 0], [3.94, 1.34, 2]);
        a.re('P42', [-34.98, 7.84, -317.62], [-6.2, 0, 0], [3.94, 1.34, 2]);
        a.re('P43', [-35.87, 2.45, -317.54], [-6.2, 0, 0], [2, 10.06, 2]);
        a.re('P44', [-35.87, -2.53, -317.54], [-6.2, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P45', [-11.42, -1.46, -354.42], [-9.42, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P46', [-11.42, 3.51, -354.42], [-9.42, 0, 0], [2, 10.06, 2]);
        a.re('P47', [-12.31, 8.9, -354.42], [-9.42, 0, 0], [3.94, 1.34, 2]);
        a.re('P48', [-11.31, 8.9, -431.89], [-9.42, 0, 0], [3.94, 1.34, 2]);
        a.re('P49', [-10.42, 3.51, -431.89], [-9.42, 0, 0], [2, 10.06, 2]);
        a.re('P50', [-10.42, -1.46, -431.89], [-9.42, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P51', [-29.25, -1.46, -432.14], [-12.65, 0, 0], [4.04, 0.94, 5.1]);
        a.re('P52', [-29.25, 3.51, -432.14], [-12.65, 0, 0], [2, 10.06, 2]);
        a.re('P53', [-28.37, 8.9, -432.06], [-12.65, 0, 0], [3.94, 1.34, 2]);
        a.re('P54', [-28.37, 8.9, -374.94], [-12.65, 0, 0], [3.94, 1.34, 2]);
        a.re('P55', [-29.25, 3.51, -375.02], [-12.65, 0, 0], [2, 10.06, 2]);
        a.re('P56', [-29.25, -1.46, -375.02], [-12.65, 0, 0], [4.04, 0.94, 5.1]);
        a.re('C6', [-18.96, 2.85, -437.7], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-19.96, 2.85, -434.69993], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-19.96, 2.85, -437.69986], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-18.96, 2.85, -434.69979], [0, 0, 0], [2, 2, 2]);
        a.re('P57', [-25.98, -1.09972, -191.53], [0.6, 0, 0], [0.3, 2, 11.44]);
        a.re('C10', [-20.96, 2.85, -434.69965], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-20.96, 2.85, -437.69958], [0, 0, 0], [2, 2, 2]);
        a.re('P58', [-28.46, -1.09951, -267.95], [0, 0, 0], [9.64, 2, 124.8]);
        a.re('P59', [-20.28, 1.4, -391.62], [0, 0, 0], [11.86, 2, 106.76]);
        a.re('P60', [-24.47, 0.7, -333.22], [-0.3, 0.38, 0], [5.1, 2, 11.86]);
        a.re('P61', [-7.41, 0.91, -42.14], [0, 0, -0.35], [4.66, 0.68, 1.18]);
        a.re('P62', [-7.41, 2.49, -42.14], [0, 0, 0.43], [4.66, 0.68, 1.18]);
        a.re('P63', [-5.71, 2.29, -42.14], [0, 0, 0.43], [3.22, 0.48, 0.82]);
        a.re('P64', [-5.71, 1.2, -42.14], [0, 0, -0.35], [3.22, 0.48, 0.82]);
        a.re('P65', [-31.75, 1.2, -345.55], [0, 0, 0.42], [3.22, 0.48, 0.82]);
        a.re('P66', [-31.75, 2.29, -345.55], [0, 0, -0.42], [3.22, 0.48, 0.82]);
        a.re('P67', [-29.9, 2.49, -345.55], [0, 0, -0.42], [4.66, 0.68, 1.18]);
        a.re('P68', [-29.89993, 0.91, -345.55], [0, 0, 0.42], [4.66, 0.68, 1.18]);
        a.re('P69', [-29.55, 0.37, -323.83], [0, 0, 0], [7.56, 2, 2]);
        a.re('P70', [-27.34, 0.37, -248.37], [0, 0, 0], [8.34, 2, 2]);
        a.re('P71', [-29.55, 0.37, -265.83], [0, 0, 0], [7.58, 2, 2]);
        a.re('P72', [-27.36, 0.37, -297.59965], [0, 0, 0], [8.36, 2, 20.86]);
        a.re('P73', [-24.77, -1.08, -96.86], [-1.57, 0, 0], [1.92, 2, 7.96]);
        a.re('P74', [-29.19951, -1.08, -101.49], [0, 0, 0], [1.92, 2, 11.2]);
        a.re('P75', [-27.53, -1.08, -106.1], [-1.57, 0, 0], [1.92, 2, 3.7]);
        a.re('P76', [-21.72, -1.08, -92.14], [0, 0, 0], [1.92, 2, 11.2]);
        a.re('P77', [-26.65, -1.08, -108.91], [0, 0, 0], [1.92, 2, 7.52]);
        a.re('P78', [-22.32, -1.96, -55.63], [0.46, 0.23, 0], [1.4, 2, 10.66]);
        a.re('P79', [-15.61, -3.18, -48.39], [1.05, 0, 0], [1.4, 2, 10.66]);
        a.re('P80', [-5.49965, -3.18, -33.05], [0.43, 0, 0], [2.34, 2, 10.66]);
        a.re('P81', [-8.89958, -3.18, -41.19], [0.46, 0, 0], [1.4, 2, 10.66]);
        a.re('P82', [-24.38, 3.23, -388.78], [0, 0, 0], [4.06, 3.06, 3.06]);
        a.re('P83', [-20.31, 3.23, -412.07], [0, 0, 0], [9.68, 3.06, 17.6]);
        a.re('P84', [-20.43, 3.23, -380.28], [0, 0, 0], [5.56, 4.42, 3.06]);
        a.re('P85', [-20.43, 3.23, -366.72], [0, 0, 0], [3.06, 3.06, 3.06]);
        a.re('P86', [-24.55, 3.23, -360.29], [0, 0, 0], [3.06, 3.06, 3.06]);
        a.re('P87', [-15.79972, 3.23, -360.29], [0, 0, 0], [3.06, 3.06, 3.06]);
        a.re('P88', [-16.27, 3.23, -388.78], [0, 0, 0], [4.06, 3.06, 3.06]);
        a.re('C12', [-20.11, 2.8200000000000003, -360.16], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-15.18, 2.8200000000000003, -366.09951], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-24.94, 2.8200000000000003, -366.1], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-22.72, 2.8200000000000003, -372.65], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-17.56, 2.8200000000000003, -372.65], [0, 0, 0], [2, 2, 2]);
        a.re('P89', [0, -1.09979, -15.37], [0, 0, 0], [2.34, 2, 10.66]);
        a.re('P90', [-26.71, -1.09972, -156.24], [0, 0, 0], [3.1, 2, 29.04]);
        a.re('P91', [-25.05, 6.58, -86.22], [0, 0, -1.57], [11.86, 10.8, 1.08]);
        a.re('P92', [0, -1.09958, -4.77], [0, 0, 0], [2.34, 2, 10.66]);
        a.re('P93', [-3.37, -3.05, -23.39951], [0, 0, 0], [2.34, 2, 10.66]);
        a.re('P94', [-25.05, -1.1, -96.9], [0, 0, 0], [11.86, 2, 31.6]);
        a.re('P95', [-26.74, -1.09993, -156.05], [0, 0, 0], [11.86, 2, 40.28]);
        a.re('P96', [-22.77, -1.09986, -181.28], [0, 0, 0], [0.3, 2, 11.28]);
        a.re('P97', [-29.19979, -1.13, -201.85], [0, 0, 0], [0.3, 2, 11.28]);
        a.re('P98', [-2.83, -1.95, -18.14], [0, 0, 0], [1.2, 3.8, 0.18]);
        a.re('P99', [-2.25, -1.95, -19.97], [0, 0, 0], [0.16, 3.8, 3.82]);
        a.re('P100', [-16.25, -4.16, -46.93], [0, 0, 0], [22.38, 2.12, 29.9]);
        a.re('P101', [-2.97, -3.05, -19.54], [0, 0, 0], [2.04, 2, 2.9]);
        a.re('Y2', [38.6, 0.83, -40.04], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y3', [-45.75, 0.83, -40.04], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y4', [-53.63, 0.83, -263.51], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y5', [8.55, 0.83, -210.29], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y6', [8.55, 0.83, -139.04], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y7', [-55.49993, 0.83, -139.04], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y8', [7.52, 0.83, -320.96], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y9', [-54.23, 0.83, -370.42], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y10', [13.21, 0.83, -449.48], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y11', [-46.79, 0.83, -449.48], [0, 0, 0], [37.2, 37.2, 37.2]);
        a.re('Y12', [-2.59, 2.11, -7.27], [0, 0, 0.62], [2, 10.34, 2]);
        a.re('Y13', [1.97, 2.11, -20.39], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y14', [-2.74, 1.31, -33.55], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y15', [-19.78, 0.96, -49.46], [0, 0, 0.62], [2, 10.34, 2]);
        a.re('Y16', [-30.15, 0.96, -99.67], [0, 0, 0.62], [2, 10.34, 2]);
        a.re('Y17', [-18.89, 3.03, -95.87], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y18', [-21.22, 3.03, -161.87], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y19', [-23.84, 3.03, -226.97], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y20', [-23.84, 3.03, -255.97], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y21', [-23.84, 3.03, -274.97], [-3.14, 0, 0.62], [2, 10.34, 2]);
        a.re('Y22', [-31.4, 3.03, -235.17], [-6.2, 0, 0.62], [2, 10.34, 2]);
        a.re('Y23', [-31.39993, 3.03, -317.66], [-6.2, 0, 0.62], [2, 10.34, 2]);
        a.re('Y24', [-15.88, 4.1, -354.69], [-9.42, 0, 0.62], [2, 10.34, 2]);
        a.re('Y25', [-14.88, 4.1, -432.16], [-9.42, 0, 0.62], [2, 10.34, 2]);
        a.re('Y26', [-24.83, 4.1, -431.48], [-12.65, 0, 0.62], [2, 10.34, 2]);
        a.re('Y27', [-24.83, 4.1, -374.36], [-12.65, 0, 0.62], [2, 10.34, 2]);
        a.re('E0', [-20.07, 2.4, -436.15], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}