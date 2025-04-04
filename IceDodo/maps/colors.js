var map = {
    title: "Colors",
    song: "env2",
    maker: "awehero",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-10.19972, 1.38, -14.41972], [0, 0, 0], [8, 8, 8], "0000ff", 0, 0, 0.6, false, true);
        a.p([-30.95965, 0.16, -102.90965], [0, 0, 0], [8, 8, 8], "0000ff", 0, 0, 0.6, false, true);
        a.p([-16.61958, 1.66, -194.27958], [0.3, 0, 0.7], [60, 1, 80], "0000ff", 0, 0, 0.6, false, true);
        a.s([-37.99951, 1, -199.99951], 4, "0000ff", 0, 0, 0.6, true);
        a.s([-29, 1, -200], 4, "0000ff", 0, 0, 0.6, true);
        a.s([-34.49993, 7, -209.99993], 4, "0000ff", 0, 0, 0.6, true);
        a.s([-32.49986, 7, -209.99986], 4, "0000ff", 0, 0, 0.6, true);
        a.p([-45.99979, 3, -147.49979], [-0.79, 0, 0], [10, 2, 2], "0000ff", 0, 0, 0.6, false, true);
        a.c([-25.99972, 1.9, -136.98972], "0000ff");
        a.p([1.75, -0.76965, -15.37965], [-0.54, 0, 0], [4, 2, 8], "0000ff", 0, 0, 0.6, false, false);
        a.c([-43.44958, 1.98, -106.36958], "0000ff");
        a.p([-4.03951, -0.80951, -40.31951], [0.35, 0, 0], [4, 2, 8], "0000ff", 0, 0, 0.6, false, false);
        a.p([-39.64, 0.32, -140.25], [0, 0, 0], [2, 2, 4], "0000ff", 0, 0, 0.6, false, false);
        a.p([-35.21993, 0.34, -123.50993], [-1.05, 0, 0], [2, 2, 8], "0000ff", 0, 0, 0.6, false, false);
        a.p([-33.49986, 0, -202.99986], [0, 0, 0], [4, 2, 6], "0000ff", 0, 0, 0.6, false, false);
        a.p([12.9, 4.26, -8.16979], [0, 0, 0], [4, 4, 4], "00ff00", 0, 0, 0.6, false, true);
        a.p([-26.09972, 4.26, -76.52972], [0, 0, 0], [4, 4, 4], "00ff00", 0, 0, 0.6, false, true);
        a.p([-14.84965, -20.49965, -36.99965], [-0.03, -0.13, -0.23], [60, 1, 100], "00ff00", 0, 0, 0.6, false, true);
        a.p([-51.33958, 4.52, -104.01958], [0, 0, 0], [6, 6, 6], "00ff00", 0, 0, 0.6, false, true);
        a.p([23.1, 0.88, -51.06951], [0, 0, 1.12], [60, 1, 100], "00ff00", 0, 0, 0.6, false, true);
        a.y([-17.24, 0, -45.37], [-0.12, 0.33, 2.03], [10, 0.02, 10], "00ff00", 0, 0, 0.6, true, 1);
        a.p([-48.52993, 1.69, -190.04993], [2.54, 3.45, -0.99], [60, 1, 80], "00ff00", 0, 0, 0.6, false, true);
        a.s([-37.99986, 1, -189.99986], 4, "00ff00", 0, 0, 0.6, true);
        a.s([-36.49979, 5, -209.99979], 4, "00ff00", 0, 0, 0.6, true);
        a.s([-28.99972, 1, -189.99972], 4, "00ff00", 0, 0, 0.6, true);
        a.s([-30.49965, 5, -209.99965], 4, "00ff00", 0, 0, 0.6, true);
        a.p([-45.99958, 5, -147.49958], [-0.98, 0, 0], [10, 2, 2], "00ff00", 0, 0, 0.6, false, true);
        a.c([1.37, 0.85, -34.42951], "00ff00");
        a.p([-6.08, -0.82, -47.73], [0.2, 0, 0], [4, 2, 8], "00ff00", 0, 0, 0.6, false, false);
        a.p([0, -0.74993, -2.99993], [0, 0, 0], [4, 2, 8], "00ff00", 0, 0, 0.6, false, false);
        a.p([-11.39986, 0.69, -58.98986], [0, 0, -0.21], [4.5, 2, 8], "0000ff", 0, 0, 0.6, false, false);
        a.p([-62.85979, -5.45979, -132.03979], [-0.64, -0.06, -0.44], [60, 1, 100], "0000ff", 0, 0, 0.6, false, true);
        a.c([-41.01972, 1.98, -101.08972], "00ff00");
        a.p([-30.60965, 0.4, -89.99965], [-1.57, 0, 0], [4.5, 2, 8], "00ff00", 0, 0, 0.6, false, false);
        a.p([-30.14958, 0.33, -128.60958], [-0.52, 0, 0], [2, 2, 8], "00ff00", 0, 0, 0.6, false, false);
        a.p([-37.80951, 0.32, -136.24951], [0, 0, 0], [2, 2, 4], "00ff00", 0, 0, 0.6, false, false);
        a.s([-38, 1, -195], 4, "00ffff", 0, 0, 0.6, true);
        a.p([-47.98993, 4.94, -86.27993], [3.44, 3.05, -0.79], [60, 1, 80], "00ffff", 0, 0, 0.6, false, true);
        a.p([22.38, 3.72, -64.83986], [0.3, -0.21, 1.15], [26, 0.02, 70], "00ffff", 0, 0, 0.6, false, true);
        a.p([-12.67979, 16.26, -253.58979], [0, 1.06, 0], [80, 1, 60], "00ffff", 0, 0, 0.6, false, true);
        a.s([-28.99972, 1, -194.99972], 4, "00ffff", 0, 0, 0.6, true);
        a.s([-35.49965, 6, -209.99965], 4, "00ffff", 0, 0, 0.6, true);
        a.s([-31.49958, 6, -209.99958], 4, "00ffff", 0, 0, 0.6, true);
        a.p([-45.99951, -0.99951, -147.49951], [-0.39, 0, 0], [10, 2, 2], "00ffff", 0, 0, 0.6, false, true);
        a.c([-29.78, 1.9, -138.8], "00ffff");
        a.p([-33.49993, 0, -196.99993], [0, 0, 0], [4, 2, 6], "00ffff", 0, 0, 0.6, false, false);
        a.c([-4.57986, 0.85, -38.23986], "9e00ff");
        a.s([-37.99979, 3, -209.99979], 4, "fc7f00", 0, 0, 0.6, true);
        a.p([6.44, -0.90972, -45.03972], [0, 0, 0], [10, 10, 10], "fc7f00", 0, 0, 0.6, false, true);
        a.p([-25.85965, 4.94, -24.83965], [3.24, 3.06, -0.79], [60, 1, 80], "fc7f00", 0, 0, 0.6, false, true);
        a.p([-50.58958, -2.56958, -126.38958], [0, 0, 0], [10, 10, 10], "fc7f00", 0, 0, 0.6, false, true);
        a.p([-26.76951, -5.45951, -184.03951], [-2.92, -0.06, -0.44], [60, 1, 100], "fc7f00", 0, 0, 0.6, false, true);
        a.s([-38, 1, -180], 4, "fc7f00", 0, 0, 0.6, true);
        a.s([-28.99993, 1, -179.99993], 4, "fc7f00", 0, 0, 0.6, true);
        a.s([-28.99986, 3, -209.99986], 4, "fc7f00", 0, 0, 0.6, true);
        a.p([-12.99979, 0.41, -89.99979], [0.63, 0, 0], [6, 2, 28], "fc7f00", 0, 0, 0.6, false, false);
        a.p([-45.99972, 7, -147.49972], [-1.18, 0, 0], [10, 2, 2], "fc7f00", 0, 0, 0.6, false, true);
        a.p([4.19, -0.77965, -22.04965], [-0.17, 0, 0], [4, 2, 8], "fc7f00", 0, 0, 0.6, false, false);
        a.p([-27.77958, 0.32, -136.49958], [0, 0, 0], [6, 2, 12], "fc7f00", 0, 0, 0.6, false, false);
        a.p([-42.12951, 0.37, -103.62951], [0, 0, 0], [4.5, 2, 8], "fc7f00", 0, 0, 0.6, false, false);
        a.p([-2.06, 0.69, -24.04], [0, 0, 0], [5, 5, 5], "ff0000", 0, 0, 0.6, false, true);
        a.p([-12.16993, 7.16, -45.03993], [0, 0, 0], [6, 6, 6], "ff0000", 0, 0, 0.6, false, true);
        a.p([-40.88986, 0.69, -84.00986], [0, 0, 0], [5, 5, 5], "ff0000", 0, 0, 0.6, false, true);
        a.p([-26.79979, -0.83979, -119.22979], [0, 0, 0], [5, 5, 5], "ff0000", 0, 0, 0.6, false, true);
        a.p([18.76, -20.61972, -36.99972], [0.17, 0, 0.45], [60, 1, 100], "ff0000", 0, 0, 0.6, false, true);
        a.p([-43.02965, 3.25, -179.03965], [0, 0, 0], [5, 5, 5], "ff0000", 0, 0, 0.6, false, true);
        a.p([-57.53958, 6.1, -114.42958], [0, -0.12, -1.25], [20, 1, 70], "ff0000", 0, 0, 0.6, false, true);
        a.p([4.41, 0.98, -118.82951], [0.58, 0, 0.82], [60, 1, 100], "ff0000", 0, 0, 0.6, false, true);
        a.p([-56.92, 1.66, -194.28], [2.84, -0.09, 0.87], [60, 1, 80], "ff0000", 0, 0, 0.6, false, true);
        a.y([20.13, 0, -42.69993], [0, -0.33, -2.03], [6, 0.02, 6], "ff0000", 0, 0, 0.6, true, 1);
        a.s([-28.99986, 2, -209.99986], 4, "ff0000", 0, 0, 0.6, true);
        a.s([-37.99979, 1, -174.99979], 4, "ff0000", 0, 0, 0.6, true);
        a.s([-28.99972, 1, -174.99972], 4, "ff0000", 0, 0, 0.6, true);
        a.s([-37.99965, 2, -209.99965], 4, "ff0000", 0, 0, 0.6, true);
        a.p([-45.99958, -4.99958, -147.49958], [0, 0, 0], [10, 2, 2], "ff0000", 0, 0, 0.6, false, true);
        a.c([-4.97951, 0.85, -47.07951], "ff0000");
        a.p([-42.16, 0.36, -111.53], [0, 0, 0], [2, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.p([-0.39993, -0.79993, -34.41993], [0.77, 0, 0], [4, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.p([-39.57986, 0.32, -132.24986], [0, 0, 0], [2, 2, 4], "ff0000", 0, 0, 0.6, false, false);
        a.p([-33.49979, 0, -172.99979], [0, 0, 0], [4, 2, 6], "ff0000", 0, 0, 0.6, false, false);
        a.c([-41.01972, 1.98, -94.99972], "9e00ff");
        a.p([0, -0.74965, -2.99965], [0, 0, 0], [4, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.c([-35.97958, 1.98, -93.31958], "ff0000");
        a.p([-12.69951, 0.5, -72.75951], [0, 0, 0], [4.5, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.p([0, -0.76, -9.03], [0, 0, 0], [4, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.p([-33.49993, 0, -190.99993], [0, 0, 0], [4, 2, 6], "00ff00", 0, 0, 0.6, false, false);
        a.p([13.39, -4.22986, -28.11986], [0, 0, 0], [6, 6, 6], "ff00ff", 0, 0, 0.6, false, true);
        a.p([-1.70979, 4.26, -55.84979], [0, 0, 0], [6, 6, 6], "ff00ff", 0, 0, 0.6, false, true);
        a.p([-60.58972, 1.69, -135.53972], [3.11, 3.45, -0.99], [60, 1, 80], "ff00ff", 0, 0, 0.6, false, true);
        a.p([-18.89965, 4.26, -143.91965], [0, 0, 0], [6, 6, 6], "ff00ff", 0, 0, 0.6, false, true);
        a.s([-37.99958, 1, -204.99958], 4, "ff00ff", 0, 0, 0.6, true);
        a.s([-33.49951, 8, -209.99951], 4, "ff00ff", 0, 0, 0.6, true);
        a.s([-29, 1, -205], 4, "ff00ff", 0, 0, 0.6, true);
        a.p([-45.99993, 1, -147.49993], [-0.59, 0, 0], [10, 2, 2], "ff00ff", 0, 0, 0.6, false, true);
        a.y([-12.99986, 0.5, -89.99986], [0, 0, 0], [8, 8, 8], "ff00ff", 0, 0, 0.6, false, 1);
        a.p([-40.66979, 0.38, -97.00979], [-2.71, 0, 0], [4.5, 2, 8], "ff00ff", 0, 0, 0.6, false, false);
        a.p([-40.29972, 0.35, -118.45972], [-0.52, 0, 0], [2, 2, 8], "ff00ff", 0, 0, 0.6, false, false);
        a.c([-33.53965, 1.98, -88.89965], "ff00ff");
        a.p([-9.30958, 0.12, -53.59958], [0.72, 0.26, 0], [4.5, 2, 8], "ff00ff", 0, 0, 0.6, false, false);
        a.p([-33.49951, 0.31, -153.99951], [0, 0, 0], [14, 2, 8], "ff0000", 0, 0, 0.6, false, false);
        a.p([-33.5, 0, -209], [0, 0, 0], [4, 2, 6], "ff00ff", 0, 0, 0.6, false, false);
        a.p([-48.62993, 1.66, -214.31993], [2.36, -3.07, 1.32], [60, 1, 80], "ff00ff", 0, 0, 0.6, false, true);
        a.s([-28.99986, 1, -209.99986], 4, "ff6cd5", 0, 0, 0.6, true);
        a.s([-37.99979, 1, -169.99979], 4, "ff6cd5", 0, 0, 0.6, true);
        a.s([-28.99972, 1, -169.99972], 4, "ff6cd5", 0, 0, 0.6, true);
        a.s([-37.99965, 1, -209.99965], 4, "ff6cd5", 0, 0, 0.6, true);
        a.p([-45.99958, 9, -147.49958], [-1.37, 0, 0], [10, 2, 2], "ff6cd5", 0, 0, 0.6, false, true);
        a.c([-1.28951, 0.85, -8.78951], "ff6cd5");
        a.p([-27.87, 0.32, -146.5], [0, 0, 0], [2, 2, 8], "ff6cd5", 0, 0, 0.6, false, false);
        a.c([-29.89993, 1.9, -133.47993], "ff6cd5");
        a.p([-33.49986, 0, -166.99986], [0, 0, 0], [4, 2, 6], "ff6cd5", 0, 0, 0.6, false, false);
        a.p([-9.84979, 4.26, -32.88979], [0, 0, 0], [3, 3, 3], "ffff00", 0, 0, 0.6, false, true);
        a.p([-14.84972, -20.49972, -86.82972], [-0.31, 0.02, -0.28], [60, 1, 100], "ffff00", 0, 0, 0.6, false, true);
        a.p([-41.61965, -14.05965, -83.33965], [-0.72, -0.06, -0.44], [60, 1, 100], "ffff00", 0, 0, 0.6, false, true);
        a.p([-34.02958, 1.66, -216.45958], [1.59, 0.01, 3.76], [60, 1, 80], "ffff00", 0, 0, 0.6, false, true);
        a.s([-37.99951, 1, -184.99951], 4, "ffff00", 0, 0, 0.6, true);
        a.s([-37.5, 4, -210], 4, "ffff00", 0, 0, 0.6, true);
        a.s([-28.99993, 1, -184.99993], 4, "ffff00", 0, 0, 0.6, true);
        a.s([-29.49986, 4, -209.99986], 4, "ffff00", 0, 0, 0.6, true);
        a.p([-45.99979, -2.99979, -147.49979], [-0.2, 0, 0], [10, 2, 2], "ffff00", 0, 0, 0.6, false, true);
        a.p([-33.49972, 0, -184.99972], [0, 0, 0], [4, 2, 6], "ffff00", 0, 0, 0.6, false, false);
        a.p([3.47, -0.78965, -28.56965], [0.39, 0, 0], [4, 2, 8], "ffff00", 0, 0, 0.6, false, false);
        a.p([-36.50958, 0.39, -91.92958], [-2.2, 0, 0], [4.5, 2, 8], "ffff00", 0, 0, 0.6, false, false);
        a.p([-38.15951, 0.33, -126.33951], [0, 0, 0], [2, 2, 8], "ffff00", 0, 0, 0.6, false, false);
        a.p([-14.46, 1.52, -65.41], [0, 0, -0.61], [4.5, 2, 8], "ffff00", 0, 0, 0.6, false, false);
        a.p([-10.56993, -14.05993, -108.96993], [-2.51, -0.06, -0.44], [60, 1, 100], "00ff00", 0, 0, 0.6, false, true);
        a.p([-39.60986, 0.32, -146.24986], [0, 0, 0], [0.3, 2, 8], "ffff00", 0, 0, 0.6, false, false);
        a.p([23.59, 3.72, -19.04979], [1.62, -1.06, -0.08], [40, 0.02, 10], "ffff00", 0, 0, 0.6, false, false);
        a.y([-18.02972, 6.59, -184.78972], [0.52, -0.13, -2.36], [10, 0.02, 10], "ff0000", 0, 0, 0.6, true, 1);
        a.c([1.91, 0.85, -13.03965], "ffff00");
        a.y([-9.13958, 0, -134.50958], [0.5, 0.02, -2.32], [14, 0.02, 14], "ffff00", 0, 0, 0.6, true, 1);
        a.p([-33.49951, 0, -187.99951], [0, 0, 0], [4.02, 2.02, 48], "ffffff", 0, 0, 0.6, false, false);
        a.p([-33.5, 0, -161], [0, 0, 0], [4, 2, 6], "ffffff", 0, 0, 0.6, false, false);
        a.c([-25.71993, 1.9, -133.69993], true);
        a.c([-28.75986, 1.9, -135.50986], "ffff00");
        a.c([-26.56979, 1.9, -139.85979], "ff0000");
        a.c([-29.29972, 1.9, -141.59972], "ff00ff");
        a.p([-33.49965, 0, -178.99965], [0, 0, 0], [4, 2, 6], "fc7f00", 0, 0, 0.6, false, false);
        a.c([3.01, 0.85, -28.52958], "0000ff");
        a.c([5.21, 0.85, -23.39951], "00ffff");
        a.c([1.97, 0.85, -18.35], "ff00ff");
        a.e([-33.49993, 2, -212.99993]);
    },
    post: function() {
        a.u('P3');
        a.u('P15');
        a.u('P26');
        a.u('P32');
        a.u('P33');
        a.u('P46');
        a.u('P59');
        a.u('P66');
        a.u('P73');
        a.u('P82');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#ffffff"));
        cc.set_monkey("light.intensity", 1.5);
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#00000a"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -67.99986) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P32', 'y', -0.75);
                if (PZ < -97.99986) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -97.99978999999999) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.rot('P3', 'y', 0.5);
                a.rot('P15', 'y', -0.5);
                a.rot('P26', 'y', 0.5);
                a.rot('P33', 'y', 0.5);
                a.rot('P46', 'y', 0.5);
                a.rot('P59', 'y', -0.5);
                a.rot('P66', 'y', -0.5);
                a.rot('P73', 'y', -0.5);
                if (PZ < -161.99979) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -162.98972) {
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('P82', 'z', -24.0);
                if (PZ < -163.00972) {
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -168.98979) {
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -169.00978999999998) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -173.98958000000002) {
                    this.section_id += 1
                }
                break;
            case 9:
                a.mov('P82', 'z', -24.0);
                if (PZ < -174.00958) {
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -180.98965) {
                    this.section_id += 1
                }
                break;
            case 11:
                a.mov('P82', 'z', -24.0);
                if (PZ < -181.00965) {
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -186.98951) {
                    this.section_id += 1
                }
                break;
            case 13:
                a.mov('P82', 'z', -24.0);
                if (PZ < -187.00950999999998) {
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -192.98993000000002) {
                    this.section_id += 1
                }
                break;
            case 15:
                a.mov('P82', 'z', -24.0);
                if (PZ < -193.00993) {
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -198.98986000000002) {
                    this.section_id += 1
                }
                break;
            case 17:
                a.mov('P82', 'z', -24.0);
                if (PZ < -199.00986) {
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -204.99) {
                    this.section_id += 1
                }
                break;
            case 19:
                a.mov('P82', 'z', -24.0);
                if (PZ < -205.01) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-10.19972, 1.38, -14.41972], [0, 0, 0], [8, 8, 8]);
        a.re('P1', [-30.95965, 0.16, -102.90965], [0, 0, 0], [8, 8, 8]);
        a.re('P2', [-16.61958, 1.66, -194.27958], [0.3, 0, 0.7], [60, 1, 80]);
        a.re('S0', [-37.99951, 1, -199.99951], [0, 0, 0], [4, 4, 4]);
        a.re('S1', [-29, 1, -200], [0, 0, 0], [4, 4, 4]);
        a.re('S2', [-34.49993, 7, -209.99993], [0, 0, 0], [4, 4, 4]);
        a.re('S3', [-32.49986, 7, -209.99986], [0, 0, 0], [4, 4, 4]);
        a.re('P3', [-45.99979, 3, -147.49979], [-0.79, 0, 0], [10, 2, 2]);
        a.re('C0', [-25.99972, 1.9, -136.98972], [0, 0, 0], [2, 2, 2]);
        a.re('P4', [1.75, -0.76965, -15.37965], [-0.54, 0, 0], [4, 2, 8]);
        a.re('C1', [-43.44958, 1.98, -106.36958], [0, 0, 0], [2, 2, 2]);
        a.re('P5', [-4.03951, -0.80951, -40.31951], [0.35, 0, 0], [4, 2, 8]);
        a.re('P6', [-39.64, 0.32, -140.25], [0, 0, 0], [2, 2, 4]);
        a.re('P7', [-35.21993, 0.34, -123.50993], [-1.05, 0, 0], [2, 2, 8]);
        a.re('P8', [-33.49986, 0, -202.99986], [0, 0, 0], [4, 2, 6]);
        a.re('P9', [12.9, 4.26, -8.16979], [0, 0, 0], [4, 4, 4]);
        a.re('P10', [-26.09972, 4.26, -76.52972], [0, 0, 0], [4, 4, 4]);
        a.re('P11', [-14.84965, -20.49965, -36.99965], [-0.03, -0.13, -0.23], [60, 1, 100]);
        a.re('P12', [-51.33958, 4.52, -104.01958], [0, 0, 0], [6, 6, 6]);
        a.re('P13', [23.1, 0.88, -51.06951], [0, 0, 1.12], [60, 1, 100]);
        a.re('Y0', [-17.24, 0, -45.37], [-0.12, 0.33, 2.03], [10, 0.02, 10]);
        a.re('P14', [-48.52993, 1.69, -190.04993], [2.54, 3.45, -0.99], [60, 1, 80]);
        a.re('S4', [-37.99986, 1, -189.99986], [0, 0, 0], [4, 4, 4]);
        a.re('S5', [-36.49979, 5, -209.99979], [0, 0, 0], [4, 4, 4]);
        a.re('S6', [-28.99972, 1, -189.99972], [0, 0, 0], [4, 4, 4]);
        a.re('S7', [-30.49965, 5, -209.99965], [0, 0, 0], [4, 4, 4]);
        a.re('P15', [-45.99958, 5, -147.49958], [-0.98, 0, 0], [10, 2, 2]);
        a.re('C2', [1.37, 0.85, -34.42951], [0, 0, 0], [2, 2, 2]);
        a.re('P16', [-6.08, -0.82, -47.73], [0.2, 0, 0], [4, 2, 8]);
        a.re('P17', [0, -0.74993, -2.99993], [0, 0, 0], [4, 2, 8]);
        a.re('P18', [-11.39986, 0.69, -58.98986], [0, 0, -0.21], [4.5, 2, 8]);
        a.re('P19', [-62.85979, -5.45979, -132.03979], [-0.64, -0.06, -0.44], [60, 1, 100]);
        a.re('C3', [-41.01972, 1.98, -101.08972], [0, 0, 0], [2, 2, 2]);
        a.re('P20', [-30.60965, 0.4, -89.99965], [-1.57, 0, 0], [4.5, 2, 8]);
        a.re('P21', [-30.14958, 0.33, -128.60958], [-0.52, 0, 0], [2, 2, 8]);
        a.re('P22', [-37.80951, 0.32, -136.24951], [0, 0, 0], [2, 2, 4]);
        a.re('S8', [-38, 1, -195], [0, 0, 0], [4, 4, 4]);
        a.re('P23', [-47.98993, 4.94, -86.27993], [3.44, 3.05, -0.79], [60, 1, 80]);
        a.re('P24', [22.38, 3.72, -64.83986], [0.3, -0.21, 1.15], [26, 0.02, 70]);
        a.re('P25', [-12.67979, 16.26, -253.58979], [0, 1.06, 0], [80, 1, 60]);
        a.re('S9', [-28.99972, 1, -194.99972], [0, 0, 0], [4, 4, 4]);
        a.re('S10', [-35.49965, 6, -209.99965], [0, 0, 0], [4, 4, 4]);
        a.re('S11', [-31.49958, 6, -209.99958], [0, 0, 0], [4, 4, 4]);
        a.re('P26', [-45.99951, -0.99951, -147.49951], [-0.39, 0, 0], [10, 2, 2]);
        a.re('C4', [-29.78, 1.9, -138.8], [0, 0, 0], [2, 2, 2]);
        a.re('P27', [-33.49993, 0, -196.99993], [0, 0, 0], [4, 2, 6]);
        a.re('C5', [-4.57986, 0.85, -38.23986], [0, 0, 0], [2, 2, 2]);
        a.re('S12', [-37.99979, 3, -209.99979], [0, 0, 0], [4, 4, 4]);
        a.re('P28', [6.44, -0.90972, -45.03972], [0, 0, 0], [10, 10, 10]);
        a.re('P29', [-25.85965, 4.94, -24.83965], [3.24, 3.06, -0.79], [60, 1, 80]);
        a.re('P30', [-50.58958, -2.56958, -126.38958], [0, 0, 0], [10, 10, 10]);
        a.re('P31', [-26.76951, -5.45951, -184.03951], [-2.92, -0.06, -0.44], [60, 1, 100]);
        a.re('S13', [-38, 1, -180], [0, 0, 0], [4, 4, 4]);
        a.re('S14', [-28.99993, 1, -179.99993], [0, 0, 0], [4, 4, 4]);
        a.re('S15', [-28.99986, 3, -209.99986], [0, 0, 0], [4, 4, 4]);
        a.re('P32', [-12.99979, 0.41, -89.99979], [0.63, 0, 0], [6, 2, 28]);
        a.re('P33', [-45.99972, 7, -147.49972], [-1.18, 0, 0], [10, 2, 2]);
        a.re('P34', [4.19, -0.77965, -22.04965], [-0.17, 0, 0], [4, 2, 8]);
        a.re('P35', [-27.77958, 0.32, -136.49958], [0, 0, 0], [6, 2, 12]);
        a.re('P36', [-42.12951, 0.37, -103.62951], [0, 0, 0], [4.5, 2, 8]);
        a.re('P37', [-2.06, 0.69, -24.04], [0, 0, 0], [5, 5, 5]);
        a.re('P38', [-12.16993, 7.16, -45.03993], [0, 0, 0], [6, 6, 6]);
        a.re('P39', [-40.88986, 0.69, -84.00986], [0, 0, 0], [5, 5, 5]);
        a.re('P40', [-26.79979, -0.83979, -119.22979], [0, 0, 0], [5, 5, 5]);
        a.re('P41', [18.76, -20.61972, -36.99972], [0.17, 0, 0.45], [60, 1, 100]);
        a.re('P42', [-43.02965, 3.25, -179.03965], [0, 0, 0], [5, 5, 5]);
        a.re('P43', [-57.53958, 6.1, -114.42958], [0, -0.12, -1.25], [20, 1, 70]);
        a.re('P44', [4.41, 0.98, -118.82951], [0.58, 0, 0.82], [60, 1, 100]);
        a.re('P45', [-56.92, 1.66, -194.28], [2.84, -0.09, 0.87], [60, 1, 80]);
        a.re('Y1', [20.13, 0, -42.69993], [0, -0.33, -2.03], [6, 0.02, 6]);
        a.re('S16', [-28.99986, 2, -209.99986], [0, 0, 0], [4, 4, 4]);
        a.re('S17', [-37.99979, 1, -174.99979], [0, 0, 0], [4, 4, 4]);
        a.re('S18', [-28.99972, 1, -174.99972], [0, 0, 0], [4, 4, 4]);
        a.re('S19', [-37.99965, 2, -209.99965], [0, 0, 0], [4, 4, 4]);
        a.re('P46', [-45.99958, -4.99958, -147.49958], [0, 0, 0], [10, 2, 2]);
        a.re('C6', [-4.97951, 0.85, -47.07951], [0, 0, 0], [2, 2, 2]);
        a.re('P47', [-42.16, 0.36, -111.53], [0, 0, 0], [2, 2, 8]);
        a.re('P48', [-0.39993, -0.79993, -34.41993], [0.77, 0, 0], [4, 2, 8]);
        a.re('P49', [-39.57986, 0.32, -132.24986], [0, 0, 0], [2, 2, 4]);
        a.re('P50', [-33.49979, 0, -172.99979], [0, 0, 0], [4, 2, 6]);
        a.re('C7', [-41.01972, 1.98, -94.99972], [0, 0, 0], [2, 2, 2]);
        a.re('P51', [0, -0.74965, -2.99965], [0, 0, 0], [4, 2, 8]);
        a.re('C8', [-35.97958, 1.98, -93.31958], [0, 0, 0], [2, 2, 2]);
        a.re('P52', [-12.69951, 0.5, -72.75951], [0, 0, 0], [4.5, 2, 8]);
        a.re('P53', [0, -0.76, -9.03], [0, 0, 0], [4, 2, 8]);
        a.re('P54', [-33.49993, 0, -190.99993], [0, 0, 0], [4, 2, 6]);
        a.re('P55', [13.39, -4.22986, -28.11986], [0, 0, 0], [6, 6, 6]);
        a.re('P56', [-1.70979, 4.26, -55.84979], [0, 0, 0], [6, 6, 6]);
        a.re('P57', [-60.58972, 1.69, -135.53972], [3.11, 3.45, -0.99], [60, 1, 80]);
        a.re('P58', [-18.89965, 4.26, -143.91965], [0, 0, 0], [6, 6, 6]);
        a.re('S20', [-37.99958, 1, -204.99958], [0, 0, 0], [4, 4, 4]);
        a.re('S21', [-33.49951, 8, -209.99951], [0, 0, 0], [4, 4, 4]);
        a.re('S22', [-29, 1, -205], [0, 0, 0], [4, 4, 4]);
        a.re('P59', [-45.99993, 1, -147.49993], [-0.59, 0, 0], [10, 2, 2]);
        a.re('Y2', [-12.99986, 0.5, -89.99986], [0, 0, 0], [8, 8, 8]);
        a.re('P60', [-40.66979, 0.38, -97.00979], [-2.71, 0, 0], [4.5, 2, 8]);
        a.re('P61', [-40.29972, 0.35, -118.45972], [-0.52, 0, 0], [2, 2, 8]);
        a.re('C9', [-33.53965, 1.98, -88.89965], [0, 0, 0], [2, 2, 2]);
        a.re('P62', [-9.30958, 0.12, -53.59958], [0.72, 0.26, 0], [4.5, 2, 8]);
        a.re('P63', [-33.49951, 0.31, -153.99951], [0, 0, 0], [14, 2, 8]);
        a.re('P64', [-33.5, 0, -209], [0, 0, 0], [4, 2, 6]);
        a.re('P65', [-48.62993, 1.66, -214.31993], [2.36, -3.07, 1.32], [60, 1, 80]);
        a.re('S23', [-28.99986, 1, -209.99986], [0, 0, 0], [4, 4, 4]);
        a.re('S24', [-37.99979, 1, -169.99979], [0, 0, 0], [4, 4, 4]);
        a.re('S25', [-28.99972, 1, -169.99972], [0, 0, 0], [4, 4, 4]);
        a.re('S26', [-37.99965, 1, -209.99965], [0, 0, 0], [4, 4, 4]);
        a.re('P66', [-45.99958, 9, -147.49958], [-1.37, 0, 0], [10, 2, 2]);
        a.re('C10', [-1.28951, 0.85, -8.78951], [0, 0, 0], [2, 2, 2]);
        a.re('P67', [-27.87, 0.32, -146.5], [0, 0, 0], [2, 2, 8]);
        a.re('C11', [-29.89993, 1.9, -133.47993], [0, 0, 0], [2, 2, 2]);
        a.re('P68', [-33.49986, 0, -166.99986], [0, 0, 0], [4, 2, 6]);
        a.re('P69', [-9.84979, 4.26, -32.88979], [0, 0, 0], [3, 3, 3]);
        a.re('P70', [-14.84972, -20.49972, -86.82972], [-0.31, 0.02, -0.28], [60, 1, 100]);
        a.re('P71', [-41.61965, -14.05965, -83.33965], [-0.72, -0.06, -0.44], [60, 1, 100]);
        a.re('P72', [-34.02958, 1.66, -216.45958], [1.59, 0.01, 3.76], [60, 1, 80]);
        a.re('S27', [-37.99951, 1, -184.99951], [0, 0, 0], [4, 4, 4]);
        a.re('S28', [-37.5, 4, -210], [0, 0, 0], [4, 4, 4]);
        a.re('S29', [-28.99993, 1, -184.99993], [0, 0, 0], [4, 4, 4]);
        a.re('S30', [-29.49986, 4, -209.99986], [0, 0, 0], [4, 4, 4]);
        a.re('P73', [-45.99979, -2.99979, -147.49979], [-0.2, 0, 0], [10, 2, 2]);
        a.re('P74', [-33.49972, 0, -184.99972], [0, 0, 0], [4, 2, 6]);
        a.re('P75', [3.47, -0.78965, -28.56965], [0.39, 0, 0], [4, 2, 8]);
        a.re('P76', [-36.50958, 0.39, -91.92958], [-2.2, 0, 0], [4.5, 2, 8]);
        a.re('P77', [-38.15951, 0.33, -126.33951], [0, 0, 0], [2, 2, 8]);
        a.re('P78', [-14.46, 1.52, -65.41], [0, 0, -0.61], [4.5, 2, 8]);
        a.re('P79', [-10.56993, -14.05993, -108.96993], [-2.51, -0.06, -0.44], [60, 1, 100]);
        a.re('P80', [-39.60986, 0.32, -146.24986], [0, 0, 0], [0.3, 2, 8]);
        a.re('P81', [23.59, 3.72, -19.04979], [1.62, -1.06, -0.08], [40, 0.02, 10]);
        a.re('Y3', [-18.02972, 6.59, -184.78972], [0.52, -0.13, -2.36], [10, 0.02, 10]);
        a.re('C12', [1.91, 0.85, -13.03965], [0, 0, 0], [2, 2, 2]);
        a.re('Y4', [-9.13958, 0, -134.50958], [0.5, 0.02, -2.32], [14, 0.02, 14]);
        a.re('P82', [-33.49951, 0, -187.99951], [0, 0, 0], [4.02, 2.02, 48]);
        a.re('P83', [-33.5, 0, -161], [0, 0, 0], [4, 2, 6]);
        a.re('C13', [-25.71993, 1.9, -133.69993], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-28.75986, 1.9, -135.50986], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-26.56979, 1.9, -139.85979], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-29.29972, 1.9, -141.59972], [0, 0, 0], [2, 2, 2]);
        a.re('P84', [-33.49965, 0, -178.99965], [0, 0, 0], [4, 2, 6]);
        a.re('C17', [3.01, 0.85, -28.52958], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [5.21, 0.85, -23.39951], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [1.97, 0.85, -18.35], [0, 0, 0], [2, 2, 2]);
        a.re('E0', [-33.49993, 2, -212.99993], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}