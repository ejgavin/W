var map = {
    title: "Dune",
    song: "env2",
    maker: "aethertrix",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([10.97035, 1.10035, -93.13965], [0, 1.63, 0], [3.3, 1.44, 3.3], "0c0c0c", 0, 0, 0.6, true, 1, false);
        a.y([10.97042, 1.10042, -93.13958], [0, 1.63, 0], [3.3, 1.44, 3.3], "0c0c0c", 0, 0, 0.6, true, 1, false);
        a.y([10.97049, 1.10049, -93.64951], [0, 1.63, 0], [4.3, 1.88, 4.3], "0c0c0c", 0, 0, 0.6, true, 1, false);
        a.p([10.97, -1.09, -91.6], [0, 0.2, 0], [1.58, 1.5, 3.74], "0c0c0c", 0, 0, 0.6, false, false, false, false);
        a.s([2.75007, -15.95993, -210.00993], 2, "32cd32", 0, 0, 0.6, true, false);
        a.p([0.60014, -22.45986, -206.56986], [-1.54, 0.01, 0.04], [111.34, 0.38, 30.62], "32cd32", 0, 0, 0.6, false, false, true, false);
        a.s([-0.31979, -15.93979, -204.32979], 2, "32cd32", 0, 0, 0.6, false, false);
        a.s([8.22028, -15.74972, -209.52972], 2, "32cd32", 0, 0, 0.6, false, false);
        a.s([8.61035, 4.48035, -424.87965], 33.1, "e1bf92", 0, 0, 0.6, true, false);
        a.s([2.98042, -2.58958, -363.33958], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([4.62049, -2.62951, -387.52951], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([11.38, -3.38, -384.16], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([3.26007, -2.72993, -381.80993], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([9.02014, -2.51986, -379.89986], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([9.38021, -2.03979, -372.69979], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([9.38028, -2.44972, -363.04972], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([3.20035, -2.96965, -369.71965], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.s([4.88042, -3.10958, -376.13958], 10.92, "e1bf92", 0, 0, 0.6, false, true);
        a.p([9.40049, -0.68951, -79.20951], [1.53, 0, 0], [1.02, 0.52, 2.16], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([11.71, 7.99, -31.83], [-6.3, 0.9, 0.02], [0.36, 0.62, 2.76], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([12.69007, 4.47007, -28.79993], [-6.3, 0.9, 0.02], [0.54, 0.62, 2.76], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([-13.19986, 0.04014, -54.97986], [-1.56, 0.45, 0], [39.5, 0.4, 51.88], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([10.63021, 4.47021, -28.90979], [-6.3, 0.9, 0.02], [0.54, 0.62, 2.76], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([12.56028, -0.63972, -79.06972], [1.53, 0, 0], [1.02, 0.52, 2.16], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([9.07035, -0.65965, -83.48965], [1.57, 0, 0], [1.46, 0.52, 1.42], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([11.91042, -5.16958, -118.00958], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([13.27049, -5.16951, -118.00951], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([10.38, -5.17, -118.01], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([8.81007, -5.16993, -118.00993], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([12.59014, -5.86986, -124.11986], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([11.06021, -5.84979, -124.12979], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([9.58028, -5.84972, -124.12972], [1.57, 1.57, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.s([5.15035, -3.06965, -388.80965], 7.4, "e1bf92", 0, 0, 0.6, false, true);
        a.p([11.64042, -6.22958, -108.83958], [0.01, -0.12, 0], [13.22, 0.98, 23.28], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([-45.04951, 2.77049, -29.82951], [-0.02, 0.88, 0], [111.32, 1.22, 21.76], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([2.76, -2.9, -308.46], [-6.32, 0.14, 0.03], [1.26, 0.18, 22.48], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([11.64007, -6.22993, -108.83993], [0.01, -0.12, 0], [13.22, 0.98, 23.28], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([12.44014, 11.48014, -65.36986], [-6.28, 0.01, 0.03], [0.86, 0.18, 14.74], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([10.46021, 11.47021, -65.42979], [-6.28, 0.01, 0.03], [0.86, 0.18, 14.74], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([5.98028, -2.74972, -308.35972], [-6.32, 0.14, 0.03], [1.26, 0.18, 22.48], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.s([11.90035, -3.81965, -388.00965], 3.74, "e1bf92", 0, 0, 0.6, false, true);
        a.s([5.15042, -3.06958, -388.80958], 7.4, "e1bf92", 0, 0, 0.6, false, true);
        a.s([8.76049, -4.64951, -377.43951], 7.4, "e1bf92", 0, 0, 0.6, false, true);
        a.s([2.42, -3.66, -376.63], 3.74, "e1bf92", 0, 0, 0.6, false, true);
        a.s([11.48007, -4.63993, -362.28993], 3.74, "e1bf92", 0, 0, 0.6, false, true);
        a.s([4.27014, -4.75986, -362.18986], 7.4, "e1bf92", 0, 0, 0.6, false, true);
        a.p([12.22021, -0.62979, -83.44979], [1.57, 0, 0], [1.46, 0.52, 2.68], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([66.24028, -5.65972, -145.72972], [0.01, 0, 0], [97.14, 0.98, 100.12], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([-39.61965, -5.29965, -141.93965], [0.01, 0, 0], [89.22, 0.98, 100.12], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([66.22042, 2.42042, -27.67958], [-0.02, 0.88, 0], [106.58, 1.24, 22.34], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([35.95049, -0.73951, -53.98951], [1.58, 0.47, -0.01], [36.72, 0.18, 51.86], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.p([16.77, -2.48, -45.66], [0.01, 0, 0], [197.02, 0.98, 100.12], "e1bf92", 0, 0, 0.6, false, false, true, false);
        a.c([5.38007, -17.559929999999998, -172.84993], "e1bf92");
        a.c([12.30014, -15.14986, -159.88986], "e1bf92");
        a.c([3.40021, -10.62979, -249.26979], "e1bf92");
        a.c([0.97028, -12.869720000000001, -234.50972], "e1bf92");
        a.c([12.44035, 12.00035, -41.90965], "e1bf92");
        a.c([4.46042, 0.66042, -329.33958], "e1bf92");
        a.c([9.30049, -16.479509999999998, -167.23951], "e1bf92");
        a.c([-3.47, -16.259999999999998, -206.51], "e1bf92");
        a.c([5.13007, -1.0299300000000002, -17.67993], "e1bf92");
        a.c([5.43014, -16.20986, -209.01986], "e1bf92");
        a.c([1.58021, -16.319789999999998, -203.85979], "e1bf92");
        a.c([-1.58972, -16.259719999999998, -203.62972], "e1bf92");
        a.c([10.88035, 11.97035, -53.67965], "e1bf92");
        a.c([12.30042, 11.99042, -53.80958], "e1bf92");
        a.c([12.72049, 11.96049, -53.81951], "e1bf92");
        a.c([10.59, 11.94, -53.68], "e1bf92");
        a.c([12.15007, 11.97007, -49.29993], "e1bf92");
        a.c([11.10014, 12.00014, -45.32986], "e1bf92");
        a.c([5.48021, 0.71021, -329.33979], "e1bf92");
        a.c([8.80028, -1.0697200000000002, -17.21972], "e1bf92");
        a.c([10.44035, -1.13965, -20.90965], "e1bf92");
        a.c([0.05042, -1.0695800000000002, -14.63958], "e1bf92");
        a.p([-2.41951, -16.98951, -207.25951], [-3.51, 0, 0], [1.18, 0.56, 2.02], "edc9af", 0, 0, 0.6, true, false, false, false);
        a.p([-2.64, -16.99, -204.84], [-3.08, 0, 0], [1.18, 0.56, 3.62], "edc9af", 0, 0, 0.6, true, false, false, false);
        a.p([65.30007, 15.73007, -72.57993], [0, 1.37, 0.01], [95.52, 0.98, 40.44], "f6d7b0", 0, 0, 0.6, false, true, false, false);
        a.y([11.04014, -2.11986, -121.72986], [0, 1.37, 0], [10.68, 57.02, 10.68], "f6d7b0", 0, 0, 0.6, true, 1, false);
        a.p([-38.95979, 15.73021, -72.83979], [0, 1.37, 0.01], [86.78, 0.98, 40.44], "f6d7b0", 0, 0, 0.6, false, true, false, false);
        a.y([5.25028, -15.58972, -204.47972], [-0.07, 1.53, -0.25], [31.34, 112.6, 31.34], "f6d7b0", 0, 0, 0.6, true, 1, false);
        a.p([8.92035, 27.12035, -75.14965], [0, 1.37, 0.01], [63.78, 0.98, 40.44], "f6d7b0", 0, 0, 0.6, false, true, false, false);
        a.p([11.42042, 8.29042, -63.71958], [0.01, 0, 0], [2.88, 6.2, 22.34], "f6d7b0", 0, 0, 0.6, false, true, false, false);
        a.p([6.45049, -7.22951, -364.48951], [-6.31, 0.05, 0.03], [11.02, 4.88, 61.46], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([7.27, -2.1, -17.46], [-1.44, 0, 0], [1.94, 0.98, 4.74], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([2.57007, -16.98993, -205.69993], [-0.18, 0, 0], [1.34, 0.56, 6.3], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([0.89014, -16.98986, -202.40986], [-1.21, 0, 0], [1.18, 0.56, 3.62], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([-1.47979, -16.98979, -202.53979], [-2.21, 0, 0], [1.18, 0.56, 3.62], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([11.65028, 10.97028, -46.74972], [0.01, 0, 0], [2.88, 0.94, 22.34], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([4.76035, -16.97965, -208.50965], [-1.68, -0.04, -0.14], [1.34, 0.56, 4.46], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([9.89042, -2.09958, -20.87958], [-0.47, 0, 0], [1.96, 0.98, 8.58], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([7.70049, -0.40951, -418.69951], [-6.32, 0.13, 0.03], [2.28, 0.38, 61.16], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([3.27, -9.19, -271.83], [-6.32, 0.14, 0.03], [3.92, 2.42, 120.44], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([5.57007, -13.68993, -345.12993], [-6.28, -0.8, 0.04], [3.9, 0.2, 38.98], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([7.70014, -0.40986, -418.69986], [-6.32, 0.13, 0.03], [2.28, 0.38, 61.16], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([8.10021, -17.13979, -206.84979], [0.84, 0.08, 0.07], [1.82, 0.3, 5.32], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([10.53028, -17.75972, -201.72972], [0.07, 0.11, 0.03], [3.02, 0.44, 11.02], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([10.26035, -18.78965, -187.47965], [-0.09, 0.03, 0.33], [0.92, 0.34, 4.5], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([7.08042, -19.08958, -177.06958], [-0.23, -0.06, 0.02], [0.76, 0.14, 9.98], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([8.95049, -16.98951, -165.63951], [0.28, -0.2, -0.15], [4.26, 0.34, 22.74], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([11.63, 2.55, -28.17], [-0.02, 0.88, 0], [2.62, 1.26, 22.58], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([10.98007, -2.53993, -72.11993], [0, 0, 0], [5.18, 3.52, 52.86], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([11.65014, 10.97014, -46.39986], [0.01, 0, 0], [2.88, 0.98, 22.34], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([0.16021, -2.56979, -4.01979], [0, 0, 0], [1.9, 2, 22.34], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([11.21028, -8.58972, -127.52972], [0, -0.22, 0], [5.18, 1.08, 67.7], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.p([2.82035, -2.09965, -15.64965], [-0.91, 0, 0], [2.04, 0.98, 5.84], "f6d7b0", 0, 0, 0.6, false, false, false, false);
        a.y([9.13042, 4.86042, -93.71958], [0, 1.63, 0], [1.78, 0.78, 1.78], "ff0000", 0, 0, 0.6, true, 1, false);
        a.y([13.18049, 5.04049, -93.63951], [0, 1.63, 0], [1.78, 0.78, 1.78], "ff0000", 0, 0, 0.6, true, 1, false);
        a.y([8.15, 2.93, -431.52], [0.59, 3.15, -0.01], [3.54, 3.78, 3.54], "ffd700", 0, 0, 0.6, true, 1, false);
        a.y([13.20007, 5.05007, -93.79993], [0, 1.63, 0], [2.32, 1, 2.32], "ffffff", 0, 0, 0.6, true, 1, false);
        a.y([9.16014, 4.84014, -93.94986], [0, 1.5, 0], [2.32, 1, 2.32], "ffffff", 0, 0, 0.6, true, 1, false);
        a.e([8.35042, 2.59042, -432.25958]);
    },
    post: function() {
        a.u('S4');
        a.u('S5');
        a.u('S6');
        a.u('S7');
        a.u('S8');
        a.u('S9');
        a.u('S10');
        a.u('S11');
        a.u('S12');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#f6d7b0"));
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
                if (PZ < -33.90965) {
                    steer = default_steer * 0.9;
                    speed = default_speed * 1.1;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -38.529650000000004) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -46.709509999999995) {
                    a.msg_set("Stay in the middle... QUICKSAND! ");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -58.82951) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -60.78993) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -65.10993) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -85.82958) {
                    a.msg_set("SANDWORM! ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -95.04958) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -100.38986) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -152.32986) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -155.18979) {
                    a.msg_set("Don't fall into the sandworm's stomach acid ");
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -174.54979) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -178.44986) {
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -180.90985999999998) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -180.92000000000002) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -183.38) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -189.38979) {
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -191.96979) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -196.16972) {
                    steer = default_steer * 2.5;
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 19:
                if (PZ < -215.86972) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -216.65972000000002) {
                    a.msg_set("Get ready for some speed ");
                    this.section_id += 1
                }
                break;
            case 21:
                if (PZ < -226.73972) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -227.08979) {
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 23:
                if (PZ < -341.08979) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -342.33965) {
                    a.msg_set("SANDSTORM! ");
                    this.section_id += 1
                }
                break;
            case 25:
                if (PZ < -349.81965) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -350.17972) {
                    speed = default_speed * 0.8;
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 27:
                a.mov('S4', 'x', 1.0);
                a.mov('S4', 'y', 1.0);
                a.mov('S4', 'z', 1.0);
                a.mov('S5', 'x', 1.0);
                a.mov('S5', 'y', 1.0);
                a.mov('S5', 'z', 1.0);
                a.mov('S6', 'x', 1.0);
                a.mov('S6', 'y', 1.0);
                a.mov('S6', 'z', 1.0);
                a.mov('S7', 'x', 1.0);
                a.mov('S7', 'y', 1.0);
                a.mov('S7', 'z', 1.0);
                a.mov('S8', 'x', 1.0);
                a.mov('S8', 'y', 1.0);
                a.mov('S8', 'z', 1.0);
                a.mov('S9', 'x', 1.0);
                a.mov('S9', 'y', 1.0);
                a.mov('S9', 'z', 1.0);
                a.mov('S10', 'x', 1.0);
                a.mov('S10', 'y', 1.0);
                a.mov('S10', 'z', 1.0);
                a.mov('S11', 'x', 1.0);
                a.mov('S11', 'y', 1.0);
                a.mov('S11', 'z', 1.0);
                a.mov('S12', 'x', 1.0);
                a.mov('S12', 'y', 1.0);
                a.mov('S12', 'z', 1.0);
                if (PZ < -388.75972) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [10.97035, 1.10035, -93.13965], [0, 1.63, 0], [3.3, 1.44, 3.3]);
        a.re('Y1', [10.97042, 1.10042, -93.13958], [0, 1.63, 0], [3.3, 1.44, 3.3]);
        a.re('Y2', [10.97049, 1.10049, -93.64951], [0, 1.63, 0], [4.3, 1.88, 4.3]);
        a.re('P0', [10.97, -1.09, -91.6], [0, 0.2, 0], [1.58, 1.5, 3.74]);
        a.re('S0', [2.75007, -15.95993, -210.00993], [0, 0, 0], [2, 2, 2]);
        a.re('P1', [0.60014, -22.45986, -206.56986], [-1.54, 0.01, 0.04], [111.34, 0.38, 30.62]);
        a.re('S1', [-0.31979, -15.93979, -204.32979], [0, 0, 0], [2, 2, 2]);
        a.re('S2', [8.22028, -15.74972, -209.52972], [0, 0, 0], [2, 2, 2]);
        a.re('S3', [8.61035, 4.48035, -424.87965], [0, 0, 0], [33.1, 33.1, 33.1]);
        a.re('S4', [2.98042, -2.58958, -363.33958], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S5', [4.62049, -2.62951, -387.52951], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S6', [11.38, -3.38, -384.16], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S7', [3.26007, -2.72993, -381.80993], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S8', [9.02014, -2.51986, -379.89986], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S9', [9.38021, -2.03979, -372.69979], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S10', [9.38028, -2.44972, -363.04972], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S11', [3.20035, -2.96965, -369.71965], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('S12', [4.88042, -3.10958, -376.13958], [0, 0, 0], [10.92, 10.92, 10.92]);
        a.re('P2', [9.40049, -0.68951, -79.20951], [1.53, 0, 0], [1.02, 0.52, 2.16]);
        a.re('P3', [11.71, 7.99, -31.83], [-6.3, 0.9, 0.02], [0.36, 0.62, 2.76]);
        a.re('P4', [12.69007, 4.47007, -28.79993], [-6.3, 0.9, 0.02], [0.54, 0.62, 2.76]);
        a.re('P5', [-13.19986, 0.04014, -54.97986], [-1.56, 0.45, 0], [39.5, 0.4, 51.88]);
        a.re('P6', [10.63021, 4.47021, -28.90979], [-6.3, 0.9, 0.02], [0.54, 0.62, 2.76]);
        a.re('P7', [12.56028, -0.63972, -79.06972], [1.53, 0, 0], [1.02, 0.52, 2.16]);
        a.re('P8', [9.07035, -0.65965, -83.48965], [1.57, 0, 0], [1.46, 0.52, 1.42]);
        a.re('P9', [11.91042, -5.16958, -118.00958], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P10', [13.27049, -5.16951, -118.00951], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P11', [10.38, -5.17, -118.01], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P12', [8.81007, -5.16993, -118.00993], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P13', [12.59014, -5.86986, -124.11986], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P14', [11.06021, -5.84979, -124.12979], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('P15', [9.58028, -5.84972, -124.12972], [1.57, 1.57, 0], [1.46, 0.52, 2.68]);
        a.re('S13', [5.15035, -3.06965, -388.80965], [0, 0, 0], [7.4, 7.4, 7.4]);
        a.re('P16', [11.64042, -6.22958, -108.83958], [0.01, -0.12, 0], [13.22, 0.98, 23.28]);
        a.re('P17', [-45.04951, 2.77049, -29.82951], [-0.02, 0.88, 0], [111.32, 1.22, 21.76]);
        a.re('P18', [2.76, -2.9, -308.46], [-6.32, 0.14, 0.03], [1.26, 0.18, 22.48]);
        a.re('P19', [11.64007, -6.22993, -108.83993], [0.01, -0.12, 0], [13.22, 0.98, 23.28]);
        a.re('P20', [12.44014, 11.48014, -65.36986], [-6.28, 0.01, 0.03], [0.86, 0.18, 14.74]);
        a.re('P21', [10.46021, 11.47021, -65.42979], [-6.28, 0.01, 0.03], [0.86, 0.18, 14.74]);
        a.re('P22', [5.98028, -2.74972, -308.35972], [-6.32, 0.14, 0.03], [1.26, 0.18, 22.48]);
        a.re('S14', [11.90035, -3.81965, -388.00965], [0, 0, 0], [3.74, 3.74, 3.74]);
        a.re('S15', [5.15042, -3.06958, -388.80958], [0, 0, 0], [7.4, 7.4, 7.4]);
        a.re('S16', [8.76049, -4.64951, -377.43951], [0, 0, 0], [7.4, 7.4, 7.4]);
        a.re('S17', [2.42, -3.66, -376.63], [0, 0, 0], [3.74, 3.74, 3.74]);
        a.re('S18', [11.48007, -4.63993, -362.28993], [0, 0, 0], [3.74, 3.74, 3.74]);
        a.re('S19', [4.27014, -4.75986, -362.18986], [0, 0, 0], [7.4, 7.4, 7.4]);
        a.re('P23', [12.22021, -0.62979, -83.44979], [1.57, 0, 0], [1.46, 0.52, 2.68]);
        a.re('P24', [66.24028, -5.65972, -145.72972], [0.01, 0, 0], [97.14, 0.98, 100.12]);
        a.re('P25', [-39.61965, -5.29965, -141.93965], [0.01, 0, 0], [89.22, 0.98, 100.12]);
        a.re('P26', [66.22042, 2.42042, -27.67958], [-0.02, 0.88, 0], [106.58, 1.24, 22.34]);
        a.re('P27', [35.95049, -0.73951, -53.98951], [1.58, 0.47, -0.01], [36.72, 0.18, 51.86]);
        a.re('P28', [16.77, -2.48, -45.66], [0.01, 0, 0], [197.02, 0.98, 100.12]);
        a.re('C0', [5.38007, -17.559929999999998, -172.84993], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [12.30014, -15.14986, -159.88986], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [3.40021, -10.62979, -249.26979], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [0.97028, -12.869720000000001, -234.50972], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [12.44035, 12.00035, -41.90965], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [4.46042, 0.66042, -329.33958], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [9.30049, -16.479509999999998, -167.23951], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-3.47, -16.259999999999998, -206.51], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [5.13007, -1.0299300000000002, -17.67993], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [5.43014, -16.20986, -209.01986], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [1.58021, -16.319789999999998, -203.85979], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-1.58972, -16.259719999999998, -203.62972], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [10.88035, 11.97035, -53.67965], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [12.30042, 11.99042, -53.80958], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [12.72049, 11.96049, -53.81951], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [10.59, 11.94, -53.68], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [12.15007, 11.97007, -49.29993], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [11.10014, 12.00014, -45.32986], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [5.48021, 0.71021, -329.33979], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [8.80028, -1.0697200000000002, -17.21972], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [10.44035, -1.13965, -20.90965], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [0.05042, -1.0695800000000002, -14.63958], [0, 0, 0], [2, 2, 2]);
        a.re('P29', [-2.41951, -16.98951, -207.25951], [-3.51, 0, 0], [1.18, 0.56, 2.02]);
        a.re('P30', [-2.64, -16.99, -204.84], [-3.08, 0, 0], [1.18, 0.56, 3.62]);
        a.re('P31', [65.30007, 15.73007, -72.57993], [0, 1.37, 0.01], [95.52, 0.98, 40.44]);
        a.re('Y3', [11.04014, -2.11986, -121.72986], [0, 1.37, 0], [10.68, 57.02, 10.68]);
        a.re('P32', [-38.95979, 15.73021, -72.83979], [0, 1.37, 0.01], [86.78, 0.98, 40.44]);
        a.re('Y4', [5.25028, -15.58972, -204.47972], [-0.07, 1.53, -0.25], [31.34, 112.6, 31.34]);
        a.re('P33', [8.92035, 27.12035, -75.14965], [0, 1.37, 0.01], [63.78, 0.98, 40.44]);
        a.re('P34', [11.42042, 8.29042, -63.71958], [0.01, 0, 0], [2.88, 6.2, 22.34]);
        a.re('P35', [6.45049, -7.22951, -364.48951], [-6.31, 0.05, 0.03], [11.02, 4.88, 61.46]);
        a.re('P36', [7.27, -2.1, -17.46], [-1.44, 0, 0], [1.94, 0.98, 4.74]);
        a.re('P37', [2.57007, -16.98993, -205.69993], [-0.18, 0, 0], [1.34, 0.56, 6.3]);
        a.re('P38', [0.89014, -16.98986, -202.40986], [-1.21, 0, 0], [1.18, 0.56, 3.62]);
        a.re('P39', [-1.47979, -16.98979, -202.53979], [-2.21, 0, 0], [1.18, 0.56, 3.62]);
        a.re('P40', [11.65028, 10.97028, -46.74972], [0.01, 0, 0], [2.88, 0.94, 22.34]);
        a.re('P41', [4.76035, -16.97965, -208.50965], [-1.68, -0.04, -0.14], [1.34, 0.56, 4.46]);
        a.re('P42', [9.89042, -2.09958, -20.87958], [-0.47, 0, 0], [1.96, 0.98, 8.58]);
        a.re('P43', [7.70049, -0.40951, -418.69951], [-6.32, 0.13, 0.03], [2.28, 0.38, 61.16]);
        a.re('P44', [3.27, -9.19, -271.83], [-6.32, 0.14, 0.03], [3.92, 2.42, 120.44]);
        a.re('P45', [5.57007, -13.68993, -345.12993], [-6.28, -0.8, 0.04], [3.9, 0.2, 38.98]);
        a.re('P46', [7.70014, -0.40986, -418.69986], [-6.32, 0.13, 0.03], [2.28, 0.38, 61.16]);
        a.re('P47', [8.10021, -17.13979, -206.84979], [0.84, 0.08, 0.07], [1.82, 0.3, 5.32]);
        a.re('P48', [10.53028, -17.75972, -201.72972], [0.07, 0.11, 0.03], [3.02, 0.44, 11.02]);
        a.re('P49', [10.26035, -18.78965, -187.47965], [-0.09, 0.03, 0.33], [0.92, 0.34, 4.5]);
        a.re('P50', [7.08042, -19.08958, -177.06958], [-0.23, -0.06, 0.02], [0.76, 0.14, 9.98]);
        a.re('P51', [8.95049, -16.98951, -165.63951], [0.28, -0.2, -0.15], [4.26, 0.34, 22.74]);
        a.re('P52', [11.63, 2.55, -28.17], [-0.02, 0.88, 0], [2.62, 1.26, 22.58]);
        a.re('P53', [10.98007, -2.53993, -72.11993], [0, 0, 0], [5.18, 3.52, 52.86]);
        a.re('P54', [11.65014, 10.97014, -46.39986], [0.01, 0, 0], [2.88, 0.98, 22.34]);
        a.re('P55', [0.16021, -2.56979, -4.01979], [0, 0, 0], [1.9, 2, 22.34]);
        a.re('P56', [11.21028, -8.58972, -127.52972], [0, -0.22, 0], [5.18, 1.08, 67.7]);
        a.re('P57', [2.82035, -2.09965, -15.64965], [-0.91, 0, 0], [2.04, 0.98, 5.84]);
        a.re('Y5', [9.13042, 4.86042, -93.71958], [0, 1.63, 0], [1.78, 0.78, 1.78]);
        a.re('Y6', [13.18049, 5.04049, -93.63951], [0, 1.63, 0], [1.78, 0.78, 1.78]);
        a.re('Y7', [8.15, 2.93, -431.52], [0.59, 3.15, -0.01], [3.54, 3.78, 3.54]);
        a.re('Y8', [13.20007, 5.05007, -93.79993], [0, 1.63, 0], [2.32, 1, 2.32]);
        a.re('Y9', [9.16014, 4.84014, -93.94986], [0, 1.5, 0], [2.32, 1, 2.32]);
        a.re('E0', [8.35042, 2.59042, -432.25958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}