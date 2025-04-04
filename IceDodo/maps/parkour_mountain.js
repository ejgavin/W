var map = {
    title: "Parkour Mountain",
    song: "env2",
    maker: "rocky707 and Jerwo",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-3.28993, 8.81007, 3.63007], [0, 0, 0], [0.06, 0.06, 0.46], "00000a", 0, 0, 0.6, false, false);
        a.p([-3.28986, 9.10014, 3.63014], [0, -1.57, 0], [0.06, 0.06, 0.28], "00000a", 0, 0, 0.6, false, false);
        a.p([-3.28979, 9.20021, 3.59021], [0, -0.79, 0], [0.06, 0.06, 0.16], "00000a", 0, 0, 0.6, false, false);
        a.p([-3.28972, 9.20028, 3.66028], [0, 0.79, 0], [0.06, 0.06, 0.16], "00000a", 0, 0, 0.6, false, false);
        a.p([12.87035, 24.05035, -7.49965], [0, 0, 0], [0.26, 1.66, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87042, 23.93042, -8.08958], [0, 0, 0], [0.26, 1.92, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87049, 22.64049, -8.25951], [0, 0.44, 0], [0.26, 0.88, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87, 22.11, -8.79], [0, 1.14, 0], [0.26, 0.88, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87007, 21.81007, -9.16993], [0, 0.21, 0], [0.26, 0.4, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87014, 21.89014, -8.26986], [0, 2.53, 0], [0.26, 0.88, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([12.87021, 21.19021, -8.11979], [0, 3.35, 0], [0.26, 0.88, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([-27.64972, 23.93028, -26.31972], [2.92, -0.15, -0.08], [0.26, 1.92, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([-27.79965, 25.06035, -26.03965], [2.91, -0.69, -0.08], [0.26, 0.6, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([-27.78958, 24.06042, -25.74958], [2.92, -1.85, -0.08], [0.26, 1, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.p([-27.39951, 22.54049, -26.88951], [2.91, -0.77, -0.08], [0.26, 1.4, 0.22], "004f07", 0, 0, 0.6, false, false);
        a.y([11, 1.28, -34.43], [-0.71, -0.04, 0.74], [1, 1.64, 1], "02cf02,0.3", 0, 0, 0.6, false, 1);
        a.p([8.97007, 0.83007, -34.74993], [-1.57, 0, 0], [13.12, 7.06, 4.8], "2a9fde", 0, 0, 0.6, false, true);
        a.p([8.97014, -0.89986, -21.79986], [-1.57, 0, 0], [12.88, 0.34, 4.76], "2a9fde", 0, 0, 0.6, false, true);
        a.p([0.61021, -0.93979, -17.95979], [0, 0, 0.01], [12, 0.34, 5.16], "2a9fde", 99999.0, 0, 0.6, false, false);
        a.p([9.28028, 18.43028, -47.30972], [1.53, -0.01, -0.07], [13.12, 18.84, 4.46], "2a9fde", 9999.0, 0, 0.6, false, false);
        a.p([8.97035, 12.75035, -34.74965], [-1.57, 0, 0], [13.12, 17, 4.88], "2a9fde", 9999.0, 0, 0.6, false, false);
        a.p([-2.56958, 12.71042, 6.60042], [0, 0, 0], [0.52, 10.76, 2.76], "3b2600", 0, 1.0, 0.6, false, false);
        a.y([7.68049, -0.25951, -31.90951], [0.69, 0.4, -0.31], [1, 1.64, 1], "42bcf5,0.3", 0, 0, 0.6, false, 1);
        a.y([10.74, 0.81, -34.38], [-1.89, 1.26, -0.11], [1, 1.64, 1], "5a0ee8,0.3", 0, 0, 0.6, false, 1);
        a.p([8.97007, 1.51007, -34.87993], [-1.57, 0, 0], [13.12, 5.34, 4.38], "5c5c5c", 0, 0, 0.6, false, true);
        a.p([8.97014, 1.51014, -34.87986], [-1.57, 0, 0], [13.12, 5.78, 4.94], "5c5c5c", 0, 0, 0.6, false, true);
        a.p([8.97021, 1.51021, -34.87979], [-1.57, 0, 0], [13.12, 5.64, 4.7], "5c5c5c", 0, 0, 0.6, false, true);
        a.p([0.00028, 1.83028, -17.75972], [0, 0, 0], [7.52, 1.38, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([-11.91965, -0.02965, -21.25965], [0, 0, 0], [7.52, 8.68, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([-5.31958, 3.06042, 6.60042], [0, 0, 0], [7.52, 8.68, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([-16.63951, 1.19049, 6.60049], [0, 0, 0], [7.52, 8.68, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([-5.91, 7.25, 6.6], [0, 0, 0.11], [6, 1, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([0.00007, -1.42993, -11.35993], [0, 0.44, 0], [7.52, 5.06, 7.84], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([17.59014, 19.09014, -34.00986], [0, 0.41, 0], [2.34, 1.2, 8.96], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([-16.63979, 1.19021, -9.32979], [0, 0, 0], [7.52, 8.68, 7.84], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([-20.07972, 1.19028, -1.31972], [0, 0, 0], [0.7, 8.68, 8.86], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([9.16035, 3.06035, 6.60035], [0, 0, 0], [7.52, 16.08, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([12.60042, 5.26042, -4.75958], [0, 0, 0], [0.7, 13.16, 5.32], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([15.02049, 4.53049, -26.31951], [0, 0, 0], [7.52, 27.04, 7.84], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([10.68, 10.71, -13.82], [0.01, 0.1, -0.11], [7.52, 2, 7.84], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([0.00007, 0.45007, -14.73993], [0, 0, 0], [7.52, 2.72, 1.36], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([0.00014, 0.45014, -20.99986], [0, 0, 0], [7.52, 2.72, 1.36], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([0.00021, 1.23021, -15.64979], [0, -0.79, 0], [7.52, 2, 1.36], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([0.00028, 1.23028, -20.09972], [0, 0.79, 0], [7.52, 2, 1.36], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([2.86035, 5.69035, -25.80965], [0, 0, 0], [7.52, 20.46, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([10.68042, 11.55042, -13.70958], [0, 0, 0], [7.52, 2, 7.84], "5c5c5c", 0, 0, 0.6, true, false);
        a.p([13.98049, 3.63049, -34.84951], [-1.57, 0, 0], [13.12, 35.06, 5.54], "7d7d7d", 0, 0, 0.6, true, false);
        a.p([0, -37.26, -11.36], [0, 0, 0], [61.56, 72.94, 65.2], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-11.31993, 20.55007, -34.45993], [-1.88, 0, 0], [2.06, 1.18, 20], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-26.46986, 1.19014, -6.31986], [0, 0, 0], [13.12, 47.24, 18.96], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-23.42979, 3.63021, -35.76979], [-1.57, 0, 0], [8.26, 35.06, 7.82], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-23.00972, 22.41028, -23.62972], [0, -0.23, 0], [2.06, 1.18, 16.5], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([19.38035, 1.19035, -1.80965], [0, 0, 0], [13.12, 47.24, 18.96], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([24.06042, 1.19042, -14.96958], [-0.29, 0.1, 0.14], [13.12, 38.7, 13.24], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([26.49049, 3.91049, -26.65951], [-0.35, -0.04, -0.09], [14.06, 38.7, 19.22], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([23.5, 8.44, -40.09], [0.23, 0.21, -0.11], [14.06, 38.7, 19.22], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([13.35007, 8.44007, -47.04993], [1.53, -0.01, -0.07], [14.06, 38.7, 19.22], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-4.20986, 8.44014, -47.32986], [1.43, -0.03, 0.05], [14.06, 38.7, 19.64], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-20.74979, 7.09021, -48.73979], [1.98, -0.11, 0.11], [14.06, 38.7, 19.64], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-32.10972, 11.59028, -34.32972], [2.92, -0.15, -0.08], [14.22, 38.86, 23.7], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-34.46965, 11.59035, -15.27965], [3.28, -0.15, -0.08], [12.96, 38.52, 17.62], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-33.93958, 11.59042, 3.32042], [3.5, 0.25, 0.04], [12.96, 38.52, 17.62], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-27.51951, 8.43049, 11.42049], [4.13, -0.19, -0.13], [12.96, 38.52, 17.62], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-13.82, 7.96, 16.54], [4.67, -0.19, 0.06], [12.96, 38.52, 17.62], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([2.99007, 10.43007, 18.98007], [4.89, 0.06, 0.3], [12.96, 38.52, 17.62], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([17.15014, 10.43014, 11.15014], [5.5, 0.03, 0.13], [11.88, 38.52, 12.7], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([2.24021, 3.63021, -34.84979], [-1.57, 0, 0], [13.12, 35.06, 9.44], "7d7d7d", 0, 0, 0.6, false, false);
        a.p([-5.07972, -0.76972, -2.96972], [-2.62, -0.16, 0.19], [1.92, 1.92, 1.92], "946d1f", 0, 0, 0.6, false, true);
        a.p([7.45035, -0.76965, -13.87965], [0.97, 3.49, 0.04], [1.92, 1.92, 1.92], "946d1f", 0, 0, 0.6, false, true);
        a.p([5.99042, -0.90958, 12.46042], [-1.41, 3.34, 0.22], [1.92, 1.92, 1.92], "946d1f", 0, 0, 0.6, false, true);
        a.p([-24.12951, -0.89951, -26.44951], [-0.59, 3.22, 0.15], [1.92, 1.92, 1.92], "946d1f", 0, 0, 0.6, false, true);
        a.p([-6.52, -0.42, -3.23], [-1.97, -0.17, -0.04], [1.92, 1.92, 1.92], "a89214", 0, 0, 0.6, false, true);
        a.p([8.77007, -0.66993, -13.56993], [-0.1, 3.24, -0.19], [1.92, 1.92, 1.92], "a89214", 0, 0, 0.6, false, true);
        a.p([4.83014, -0.53986, 13.07014], [-2.49, 3.33, 0.03], [1.92, 1.92, 1.92], "a89214", 0, 0, 0.6, false, true);
        a.p([-22.92979, -0.47979, -25.28979], [-1.07, 3.07, 0.24], [1.92, 1.92, 1.92], "a89214", 0, 0, 0.6, false, true);
        a.p([-5.85972, -0.76972, -4.31972], [-2.2, 0.12, 0.02], [1.92, 1.92, 1.92], "b08a2a", 0, 0, 0.6, false, true);
        a.p([7.96035, -0.52965, -14.54965], [0.15, 1.88, 0.02], [1.92, 1.92, 1.92], "b08a2a", 0, 0, 0.6, false, true);
        a.p([6.10042, -0.51958, 13.23042], [-2.25, 1.91, 0.25], [1.92, 1.92, 1.92], "b08a2a", 0, 0, 0.6, false, true);
        a.p([-22.70951, -0.71951, -26.52951], [-0.61, 1.45, -0.08], [1.92, 1.92, 1.92], "b08a2a", 0, 0, 0.6, false, true);
        a.p([9.26, 0.05, -37.24], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.p([9.01007, 0.60007, -37.31993], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.p([8.73014, 0.05014, -37.39986], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.p([9.54021, -0.50979, -37.15979], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.p([8.99028, -0.50972, -37.31972], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.p([8.45035, -0.50965, -37.47965], [-0.29, 0, 0], [0.54, 0.54, 1.08], "d6b50d", 0, 3.0, 0.6, false, false);
        a.y([11.12042, 1.17042, -34.02958], [-0.63, 0.5, 0.19], [1, 1.64, 1], "e10ee8,0.3", 0, 0, 0.6, false, 1);
        a.y([7.29049, -0.25951, -31.53951], [-0.78, 0.4, -0.31], [1, 1.64, 1], "e80e0e,0.3", 0, 0, 0.6, false, 1);
        a.y([7.41, 0.09, -31.86], [0.69, 0, 0], [1, 1.64, 1], "e88d0e,0.3", 0, 0, 0.6, false, 1);
        a.p([-3.15993, 7.55007, 4.26007], [0, 0, 0], [0.3, 2.24, 0.3], "ebca71", 0, 0, 0.6, false, false);
        a.p([-3.15986, 7.55014, 2.99014], [0, 0, 0], [0.3, 2.24, 0.3], "ebca71", 0, 0, 0.6, false, false);
        a.p([-3.15979, 9.01021, 3.63021], [0, 0, 0], [0.3, 0.9, 1.58], "ebca71", 0, 0, 0.6, false, false);
        a.p([-3.11972, 12.33028, -39.39972], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([12.42035, 3.45035, 2.51035], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([12.42042, 3.45042, -7.44958], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([-19.65951, 3.45049, 2.52049], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([-11.03, 3.04, 10.37], [0, 0, 0], [4.22, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([-27.23993, 6.76007, -16.06993], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([-19.40986, 12.33014, 9.79014], [0, 0, 0], [2, 2, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([-11.31979, 24.11021, -3.39979], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-8.61972, 24.11028, -3.39972], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-6.05965, 24.11035, -3.39965], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-3.50958, 24.11042, -3.39958], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-0.92951, 24.11049, -3.39951], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([1.72, 24.11, -3.4], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([4.44007, 24.11007, -3.39993], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([7.10014, 24.11014, -3.39986], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([9.61021, 24.11021, -3.39979], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([11.94028, 24.11028, -3.39972], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-13.84965, 24.11035, -3.39965], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-16.41958, 24.11042, -3.39958], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([-19.10951, 24.11049, -3.39951], [0, 0, 0], [2.06, 1.18, 3.96], "964b00", 0, 0, 0.6, false, false);
        a.p([12.99, 26.53, -1.3], [0, 0, 0], [0.74, 3.62, 0.68], "964b00", 0, 0, 0.6, false, false);
        a.p([12.99007, 26.53007, -5.56993], [0, 0, 0], [0.74, 3.62, 0.68], "964b00", 0, 0, 0.6, false, false);
        a.p([-20.31986, 26.53014, -5.56986], [0, 0, 0], [0.74, 3.62, 0.68], "964b00", 0, 0, 0.6, false, false);
        a.p([-20.31979, 26.53021, -1.23979], [0, 0, 0], [0.74, 3.62, 0.68], "964b00", 0, 0, 0.6, false, false);
        a.y([-2.89972, -0.25972, -40.18972], [-0.68, 0, -1.65], [0.2, 1.5, 0.2], "bababa,0.3", 0, 0, 0.6, true, -1.0);
        a.y([-3.66965, 24.12035, -2.04965], [0, 0, -1.57], [0.4, 34.08, 0.4], "c4a484", 0, 0, 0.6, false, 1);
        a.p([-11.87958, 26.71042, -1.29958], [0, 0, -0.1], [16.6, 0.2, 0.2], "c4a484", 0, 0, 0.6, false, false);
        a.p([-11.87951, 26.71049, -5.46951], [0, 0, -0.1], [16.6, 0.2, 0.2], "c4a484", 0, 0, 0.6, false, false);
        a.p([4.52, 26.71, -5.47], [0, 0, 0.1], [16.6, 0.2, 0.2], "c4a484", 0, 0, 0.6, false, false);
        a.p([4.52007, 26.71007, -1.29993], [0, 0, 0.1], [16.6, 0.2, 0.2], "c4a484", 0, 0, 0.6, false, false);
        a.y([-3.66986, 24.12014, -4.74986], [0, 0, -1.57], [0.4, 34.08, 0.4], "c4a484", 0, 0, 0.6, false, 1);
        a.y([10.38028, 2.24028, -35.03972], [-0.71, -0.04, 0.74], [1, 1.02, 1], "02cf02,0.3", 0, 0, 0.6, false, 0.0);
        a.y([8.28035, 0.88035, -31.75965], [0.69, 0.4, -0.31], [1, 1.02, 1], "42bcf5,0.3", 0, 0, 0.6, false, 0.0);
        a.y([9.56042, 1.21042, -34.71958], [-1.89, 1.26, -0.11], [1, 1.02, 1], "5a0ee8,0.3", 0, 0, 0.6, false, 0.0);
        a.y([10.58049, 2.28049, -33.65951], [-0.63, 0.5, 0.19], [1, 1.02, 1], "e10ee8,0.3", 0, 0, 0.6, false, 0.0);
        a.y([7.19, 0.88, -30.93], [-0.78, 0.4, -0.31], [1, 1.02, 1], "e80e0e,0.3", 0, 0, 0.6, false, 0.0);
        a.y([7.41007, 1.39007, -31.85993], [0.69, 0, 0], [1, 1.02, 1], "e88d0e,0.3", 0, 0, 0.6, false, 0.0);
        a.e([19.25014, 25.12014, -2.99986]);
        a.e([-0.72979, 0.60021, -507.61979]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("jumpSpeed", 0.0);
        cc.set_monkey("steer", default_steer * 1.5);
        cc.set_monkey("jumpHeight", 0.75);
        cc.set_monkey("radius", 2.0);
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#00000a"));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-3.28993, 8.81007, 3.63007], [0, 0, 0], [0.06, 0.06, 0.46]);
        a.re('P1', [-3.28986, 9.10014, 3.63014], [0, -1.57, 0], [0.06, 0.06, 0.28]);
        a.re('P2', [-3.28979, 9.20021, 3.59021], [0, -0.79, 0], [0.06, 0.06, 0.16]);
        a.re('P3', [-3.28972, 9.20028, 3.66028], [0, 0.79, 0], [0.06, 0.06, 0.16]);
        a.re('P4', [12.87035, 24.05035, -7.49965], [0, 0, 0], [0.26, 1.66, 0.22]);
        a.re('P5', [12.87042, 23.93042, -8.08958], [0, 0, 0], [0.26, 1.92, 0.22]);
        a.re('P6', [12.87049, 22.64049, -8.25951], [0, 0.44, 0], [0.26, 0.88, 0.22]);
        a.re('P7', [12.87, 22.11, -8.79], [0, 1.14, 0], [0.26, 0.88, 0.22]);
        a.re('P8', [12.87007, 21.81007, -9.16993], [0, 0.21, 0], [0.26, 0.4, 0.22]);
        a.re('P9', [12.87014, 21.89014, -8.26986], [0, 2.53, 0], [0.26, 0.88, 0.22]);
        a.re('P10', [12.87021, 21.19021, -8.11979], [0, 3.35, 0], [0.26, 0.88, 0.22]);
        a.re('P11', [-27.64972, 23.93028, -26.31972], [2.92, -0.15, -0.08], [0.26, 1.92, 0.22]);
        a.re('P12', [-27.79965, 25.06035, -26.03965], [2.91, -0.69, -0.08], [0.26, 0.6, 0.22]);
        a.re('P13', [-27.78958, 24.06042, -25.74958], [2.92, -1.85, -0.08], [0.26, 1, 0.22]);
        a.re('P14', [-27.39951, 22.54049, -26.88951], [2.91, -0.77, -0.08], [0.26, 1.4, 0.22]);
        a.re('Y0', [11, 1.28, -34.43], [-0.71, -0.04, 0.74], [1, 1.64, 1]);
        a.re('P15', [8.97007, 0.83007, -34.74993], [-1.57, 0, 0], [13.12, 7.06, 4.8]);
        a.re('P16', [8.97014, -0.89986, -21.79986], [-1.57, 0, 0], [12.88, 0.34, 4.76]);
        a.re('P17', [0.61021, -0.93979, -17.95979], [0, 0, 0.01], [12, 0.34, 5.16]);
        a.re('P18', [9.28028, 18.43028, -47.30972], [1.53, -0.01, -0.07], [13.12, 18.84, 4.46]);
        a.re('P19', [8.97035, 12.75035, -34.74965], [-1.57, 0, 0], [13.12, 17, 4.88]);
        a.re('P20', [-2.56958, 12.71042, 6.60042], [0, 0, 0], [0.52, 10.76, 2.76]);
        a.re('Y1', [7.68049, -0.25951, -31.90951], [0.69, 0.4, -0.31], [1, 1.64, 1]);
        a.re('Y2', [10.74, 0.81, -34.38], [-1.89, 1.26, -0.11], [1, 1.64, 1]);
        a.re('P21', [8.97007, 1.51007, -34.87993], [-1.57, 0, 0], [13.12, 5.34, 4.38]);
        a.re('P22', [8.97014, 1.51014, -34.87986], [-1.57, 0, 0], [13.12, 5.78, 4.94]);
        a.re('P23', [8.97021, 1.51021, -34.87979], [-1.57, 0, 0], [13.12, 5.64, 4.7]);
        a.re('P24', [0.00028, 1.83028, -17.75972], [0, 0, 0], [7.52, 1.38, 7.84]);
        a.re('P25', [-11.91965, -0.02965, -21.25965], [0, 0, 0], [7.52, 8.68, 7.84]);
        a.re('P26', [-5.31958, 3.06042, 6.60042], [0, 0, 0], [7.52, 8.68, 7.84]);
        a.re('P27', [-16.63951, 1.19049, 6.60049], [0, 0, 0], [7.52, 8.68, 7.84]);
        a.re('P28', [-5.91, 7.25, 6.6], [0, 0, 0.11], [6, 1, 7.84]);
        a.re('P29', [0.00007, -1.42993, -11.35993], [0, 0.44, 0], [7.52, 5.06, 7.84]);
        a.re('P30', [17.59014, 19.09014, -34.00986], [0, 0.41, 0], [2.34, 1.2, 8.96]);
        a.re('P31', [-16.63979, 1.19021, -9.32979], [0, 0, 0], [7.52, 8.68, 7.84]);
        a.re('P32', [-20.07972, 1.19028, -1.31972], [0, 0, 0], [0.7, 8.68, 8.86]);
        a.re('P33', [9.16035, 3.06035, 6.60035], [0, 0, 0], [7.52, 16.08, 7.84]);
        a.re('P34', [12.60042, 5.26042, -4.75958], [0, 0, 0], [0.7, 13.16, 5.32]);
        a.re('P35', [15.02049, 4.53049, -26.31951], [0, 0, 0], [7.52, 27.04, 7.84]);
        a.re('P36', [10.68, 10.71, -13.82], [0.01, 0.1, -0.11], [7.52, 2, 7.84]);
        a.re('P37', [0.00007, 0.45007, -14.73993], [0, 0, 0], [7.52, 2.72, 1.36]);
        a.re('P38', [0.00014, 0.45014, -20.99986], [0, 0, 0], [7.52, 2.72, 1.36]);
        a.re('P39', [0.00021, 1.23021, -15.64979], [0, -0.79, 0], [7.52, 2, 1.36]);
        a.re('P40', [0.00028, 1.23028, -20.09972], [0, 0.79, 0], [7.52, 2, 1.36]);
        a.re('P41', [2.86035, 5.69035, -25.80965], [0, 0, 0], [7.52, 20.46, 7.84]);
        a.re('P42', [10.68042, 11.55042, -13.70958], [0, 0, 0], [7.52, 2, 7.84]);
        a.re('P43', [13.98049, 3.63049, -34.84951], [-1.57, 0, 0], [13.12, 35.06, 5.54]);
        a.re('P44', [0, -37.26, -11.36], [0, 0, 0], [61.56, 72.94, 65.2]);
        a.re('P45', [-11.31993, 20.55007, -34.45993], [-1.88, 0, 0], [2.06, 1.18, 20]);
        a.re('P46', [-26.46986, 1.19014, -6.31986], [0, 0, 0], [13.12, 47.24, 18.96]);
        a.re('P47', [-23.42979, 3.63021, -35.76979], [-1.57, 0, 0], [8.26, 35.06, 7.82]);
        a.re('P48', [-23.00972, 22.41028, -23.62972], [0, -0.23, 0], [2.06, 1.18, 16.5]);
        a.re('P49', [19.38035, 1.19035, -1.80965], [0, 0, 0], [13.12, 47.24, 18.96]);
        a.re('P50', [24.06042, 1.19042, -14.96958], [-0.29, 0.1, 0.14], [13.12, 38.7, 13.24]);
        a.re('P51', [26.49049, 3.91049, -26.65951], [-0.35, -0.04, -0.09], [14.06, 38.7, 19.22]);
        a.re('P52', [23.5, 8.44, -40.09], [0.23, 0.21, -0.11], [14.06, 38.7, 19.22]);
        a.re('P53', [13.35007, 8.44007, -47.04993], [1.53, -0.01, -0.07], [14.06, 38.7, 19.22]);
        a.re('P54', [-4.20986, 8.44014, -47.32986], [1.43, -0.03, 0.05], [14.06, 38.7, 19.64]);
        a.re('P55', [-20.74979, 7.09021, -48.73979], [1.98, -0.11, 0.11], [14.06, 38.7, 19.64]);
        a.re('P56', [-32.10972, 11.59028, -34.32972], [2.92, -0.15, -0.08], [14.22, 38.86, 23.7]);
        a.re('P57', [-34.46965, 11.59035, -15.27965], [3.28, -0.15, -0.08], [12.96, 38.52, 17.62]);
        a.re('P58', [-33.93958, 11.59042, 3.32042], [3.5, 0.25, 0.04], [12.96, 38.52, 17.62]);
        a.re('P59', [-27.51951, 8.43049, 11.42049], [4.13, -0.19, -0.13], [12.96, 38.52, 17.62]);
        a.re('P60', [-13.82, 7.96, 16.54], [4.67, -0.19, 0.06], [12.96, 38.52, 17.62]);
        a.re('P61', [2.99007, 10.43007, 18.98007], [4.89, 0.06, 0.3], [12.96, 38.52, 17.62]);
        a.re('P62', [17.15014, 10.43014, 11.15014], [5.5, 0.03, 0.13], [11.88, 38.52, 12.7]);
        a.re('P63', [2.24021, 3.63021, -34.84979], [-1.57, 0, 0], [13.12, 35.06, 9.44]);
        a.re('P64', [-5.07972, -0.76972, -2.96972], [-2.62, -0.16, 0.19], [1.92, 1.92, 1.92]);
        a.re('P65', [7.45035, -0.76965, -13.87965], [0.97, 3.49, 0.04], [1.92, 1.92, 1.92]);
        a.re('P66', [5.99042, -0.90958, 12.46042], [-1.41, 3.34, 0.22], [1.92, 1.92, 1.92]);
        a.re('P67', [-24.12951, -0.89951, -26.44951], [-0.59, 3.22, 0.15], [1.92, 1.92, 1.92]);
        a.re('P68', [-6.52, -0.42, -3.23], [-1.97, -0.17, -0.04], [1.92, 1.92, 1.92]);
        a.re('P69', [8.77007, -0.66993, -13.56993], [-0.1, 3.24, -0.19], [1.92, 1.92, 1.92]);
        a.re('P70', [4.83014, -0.53986, 13.07014], [-2.49, 3.33, 0.03], [1.92, 1.92, 1.92]);
        a.re('P71', [-22.92979, -0.47979, -25.28979], [-1.07, 3.07, 0.24], [1.92, 1.92, 1.92]);
        a.re('P72', [-5.85972, -0.76972, -4.31972], [-2.2, 0.12, 0.02], [1.92, 1.92, 1.92]);
        a.re('P73', [7.96035, -0.52965, -14.54965], [0.15, 1.88, 0.02], [1.92, 1.92, 1.92]);
        a.re('P74', [6.10042, -0.51958, 13.23042], [-2.25, 1.91, 0.25], [1.92, 1.92, 1.92]);
        a.re('P75', [-22.70951, -0.71951, -26.52951], [-0.61, 1.45, -0.08], [1.92, 1.92, 1.92]);
        a.re('P76', [9.26, 0.05, -37.24], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('P77', [9.01007, 0.60007, -37.31993], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('P78', [8.73014, 0.05014, -37.39986], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('P79', [9.54021, -0.50979, -37.15979], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('P80', [8.99028, -0.50972, -37.31972], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('P81', [8.45035, -0.50965, -37.47965], [-0.29, 0, 0], [0.54, 0.54, 1.08]);
        a.re('Y3', [11.12042, 1.17042, -34.02958], [-0.63, 0.5, 0.19], [1, 1.64, 1]);
        a.re('Y4', [7.29049, -0.25951, -31.53951], [-0.78, 0.4, -0.31], [1, 1.64, 1]);
        a.re('Y5', [7.41, 0.09, -31.86], [0.69, 0, 0], [1, 1.64, 1]);
        a.re('P82', [-3.15993, 7.55007, 4.26007], [0, 0, 0], [0.3, 2.24, 0.3]);
        a.re('P83', [-3.15986, 7.55014, 2.99014], [0, 0, 0], [0.3, 2.24, 0.3]);
        a.re('P84', [-3.15979, 9.01021, 3.63021], [0, 0, 0], [0.3, 0.9, 1.58]);
        a.re('P85', [-3.11972, 12.33028, -39.39972], [0, 0, 0], [2, 2, 2]);
        a.re('P86', [12.42035, 3.45035, 2.51035], [0, 0, 0], [2, 2, 2]);
        a.re('P87', [12.42042, 3.45042, -7.44958], [0, 0, 0], [2, 2, 2]);
        a.re('P88', [-19.65951, 3.45049, 2.52049], [0, 0, 0], [2, 2, 2]);
        a.re('P89', [-11.03, 3.04, 10.37], [0, 0, 0], [4.22, 2, 2]);
        a.re('P90', [-27.23993, 6.76007, -16.06993], [0, 0, 0], [2, 2, 2]);
        a.re('P91', [-19.40986, 12.33014, 9.79014], [0, 0, 0], [2, 2, 2]);
        a.re('P92', [-11.31979, 24.11021, -3.39979], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P93', [-8.61972, 24.11028, -3.39972], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P94', [-6.05965, 24.11035, -3.39965], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P95', [-3.50958, 24.11042, -3.39958], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P96', [-0.92951, 24.11049, -3.39951], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P97', [1.72, 24.11, -3.4], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P98', [4.44007, 24.11007, -3.39993], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P99', [7.10014, 24.11014, -3.39986], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P100', [9.61021, 24.11021, -3.39979], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P101', [11.94028, 24.11028, -3.39972], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P102', [-13.84965, 24.11035, -3.39965], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P103', [-16.41958, 24.11042, -3.39958], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P104', [-19.10951, 24.11049, -3.39951], [0, 0, 0], [2.06, 1.18, 3.96]);
        a.re('P105', [12.99, 26.53, -1.3], [0, 0, 0], [0.74, 3.62, 0.68]);
        a.re('P106', [12.99007, 26.53007, -5.56993], [0, 0, 0], [0.74, 3.62, 0.68]);
        a.re('P107', [-20.31986, 26.53014, -5.56986], [0, 0, 0], [0.74, 3.62, 0.68]);
        a.re('P108', [-20.31979, 26.53021, -1.23979], [0, 0, 0], [0.74, 3.62, 0.68]);
        a.re('Y6', [-2.89972, -0.25972, -40.18972], [-0.68, 0, -1.65], [0.2, 1.5, 0.2]);
        a.re('Y7', [-3.66965, 24.12035, -2.04965], [0, 0, -1.57], [0.4, 34.08, 0.4]);
        a.re('P109', [-11.87958, 26.71042, -1.29958], [0, 0, -0.1], [16.6, 0.2, 0.2]);
        a.re('P110', [-11.87951, 26.71049, -5.46951], [0, 0, -0.1], [16.6, 0.2, 0.2]);
        a.re('P111', [4.52, 26.71, -5.47], [0, 0, 0.1], [16.6, 0.2, 0.2]);
        a.re('P112', [4.52007, 26.71007, -1.29993], [0, 0, 0.1], [16.6, 0.2, 0.2]);
        a.re('Y8', [-3.66986, 24.12014, -4.74986], [0, 0, -1.57], [0.4, 34.08, 0.4]);
        a.re('Y9', [10.38028, 2.24028, -35.03972], [-0.71, -0.04, 0.74], [1, 1.02, 1]);
        a.re('Y10', [8.28035, 0.88035, -31.75965], [0.69, 0.4, -0.31], [1, 1.02, 1]);
        a.re('Y11', [9.56042, 1.21042, -34.71958], [-1.89, 1.26, -0.11], [1, 1.02, 1]);
        a.re('Y12', [10.58049, 2.28049, -33.65951], [-0.63, 0.5, 0.19], [1, 1.02, 1]);
        a.re('Y13', [7.19, 0.88, -30.93], [-0.78, 0.4, -0.31], [1, 1.02, 1]);
        a.re('Y14', [7.41007, 1.39007, -31.85993], [0.69, 0, 0], [1, 1.02, 1]);
        a.re('E0', [19.25014, 25.12014, -2.99986], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-0.72979, 0.60021, -507.61979], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}