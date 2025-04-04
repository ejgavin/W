var map = {
    title: "Push the Block",
    song: "env2",
    maker: "awehero",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00021, 11.25021, -36.09979], [0, 0, 0], [2, 20, 2], "0000ff", 0, 1.0, 0.6, false, false);
        a.p([0.00028, 7.51028, -8.99972], [0, 0, 0], [2, 2, 2], "00fbff", 0, 1.0, 0.6, false, false);
        a.p([1.50035, 7.00035, -15.49965], [0, 0, 0], [0.2, 6, 3], "00fbff", 0, 0, 0.6, false, false);
        a.p([-1.49958, 7.00042, -15.49958], [0, 0, 0], [0.2, 6, 3], "00fbff", 0, 0, 0.6, false, false);
        a.p([0.00049, 4.00049, -15.49951], [0, 0, 0], [3, 0.5, 3], "00fbff", 0, 0, 0.6, false, false);
        a.p([-9, 5, -83], [0, 0, 0], [4.5, 4.5, 4.5], "00ff00", 0, 1.0, 0.6, false, false);
        a.p([-1.49993, 9.25007, -82.99993], [0, 0, 0], [1, 2, 5], "00ff00", 0, 0, 0.6, false, false);
        a.p([-4.99986, 6.00014, -31.99986], [0, 0, 0], [0.5, 6, 6], "9300ff", 0, 0, 0.6, false, false);
        a.p([0.00021, 5.75021, -21.99979], [0, 0, 0], [3, 0.5, 10], "b9ff00", 0, 0, 0.6, false, false);
        a.p([0.00028, 3.00028, -31.99972], [0, 0, 0], [10, 0.5, 6], "b9ff00", 0, 0, 0.6, false, false);
        a.p([-8.99965, 4.10035, -68.99965], [0, 0, 0], [2.5, 2.5, 2.5], "ff0000", 0, 1.0, 0.6, false, false);
        a.p([-1.49958, 7.25042, -66.99958], [0, 0, 0], [1, 2, 3], "ff0000", 0, 0, 0.6, false, false);
        a.p([0.00049, 6.00049, -7.99951], [0, 0, 0], [10, 0.5, 12], "ff8f00", 0, 0, 0.6, false, false);
        a.p([-5, 7, -8], [0, 0, 0], [0.5, 2, 12], "ff8f00", 0, 0, 0.6, false, false);
        a.p([5.00007, 7.00007, -7.99993], [0, 0, 0], [0.5, 2, 12], "ff8f00", 0, 0, 0.6, false, false);
        a.p([-3.14986, 7.00014, -13.99986], [0, 0, 0], [3.5, 2, 0.5], "ff8f00", 0, 0, 0.6, false, false);
        a.p([-8.99979, 4.50021, -73.78979], [0, 0, 0], [3.5, 3.5, 3.5], "ffff00", 0, 1.0, 0.6, false, false);
        a.p([-1.49972, 8.25028, -73.49972], [0, 0, 0], [1, 2, 4], "ffff00", 0, 0, 0.6, false, false);
        a.p([-1.49965, 4.75035, -69.99965], [0, 0, 0], [1, 9, 3], "ffffff", 0, 0, 0.0, false, false);
        a.p([-1.49958, 4.25042, -64.74958], [0, 0, 0], [1, 8, 1.5], "ffffff", 0, 0, 0.0, false, false);
        a.p([-1.49951, 5.25049, -87.99951], [0, 0, 0], [1, 10, 5], "ffffff", 0, 0, 0.0, false, false);
        a.p([0, 2.5, -61], [0, 0, 0], [2, 0.5, 9], "ffffff", 0, 0, 0.6, false, false);
        a.p([1.00007, 3.00007, -60.99993], [0, 0, 0], [0.2, 1, 6], "ffffff", 0, 0, 0.6, false, false);
        a.p([-1.99986, 2.50014, -62.99986], [0, 0, 0], [2, 0.5, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([1.50021, 5.25021, -87.99979], [0, 0.17, 0], [1.5, 0.5, 5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.99972, 2.50028, -74.99972], [0, 0, 0], [12, 0.5, 24], "ffffff", 0, 0, 0.6, false, false);
        a.p([0.50035, 3.25035, -69.99965], [0, 0.38, 0], [1.5, 0.5, 3], "ffffff", 0, 0, 0.6, false, false);
        a.p([0.00042, 2.65042, -64.99958], [0, 0.26, 0], [1.5, 0.5, 1], "ffffff", 0, 0, 0.6, false, false);
        a.p([1.50049, 5.67049, -92.89951], [0, 0, 0], [1.5, 0.5, 5], "ffffff", 0, 0, 0.6, false, false);
        a.p([10, 2.75, -83], [0, 0, 0], [4.5, 4.5, 4.5], "-1.0", 0, 0, 0.6, false, true);
        a.p([10.00007, 2.25007, -73.49993], [0, 0, 0], [3.5, 3.5, 3.5], "-1.0", 0, 0, 0.6, false, true);
        a.p([0.00014, 1.00014, -55.89986], [0, 0, 0], [2.2, 0.5, 4], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00021, 1.50021, -37.64979], [0, 0, 0], [2.2, 0.5, 0.8], "-1.0", 0, 0, 0.6, false, false);
        a.p([2.50028, 4.75028, -73.49972], [0, 0, 0], [0.2, 9, 4], "-1.0", 0, 0, 0.6, false, false);
        a.p([1.50035, 4.25035, -66.99965], [0, 0, 0], [0.2, 8, 3], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.50042, 0.25042, -73.49958], [0, 0, 0], [4, 0.5, 4], "-1.0", 0, 0, 0.6, false, false);
        a.p([1.00049, 0.25049, -82.99951], [0, 0, 0], [5, 0.5, 5], "-1.0", 0, 0, 0.6, false, false);
        a.p([0, 0.25, -67], [0, 0, 0], [3, 0.5, 3], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00007, 0.00007, 0.00007], [0, 0, 0], [2, 0.5, 2], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00014, 1.00014, -36.09986], [0, 0, 0], [2.2, 0.5, 4], "-1.0", 0, 0, 0.6, false, false);
        a.p([-13.99979, 4.50021, -74.99979], [0, 0, 0], [0.5, 4, 24], "1.0,0.25", 0, 0, 0.6, false, false);
        a.p([-7.99972, 4.50028, -86.99972], [0, 0, 0], [12, 4, 0.5], "1.0,0.25", 0, 0, 0.6, false, false);
        a.p([5.00014, 6.00014, -31.99986], [0, 0, 0], [0.5, 6, 6], "9300ff", 0, 0, 0.6, false, false);
        a.p([0.00021, 4.25021, -28.55979], [0, 0.87, 0], [10, 4.4, 0.5], "b9ff00", 0, 0, 0.6, false, false);
        a.p([0.00028, 5.00028, -13.99972], [0, 0, 0], [3, 2, 0.2], "1", 0, 0, 0.6, false, false);
        a.p([0.00035, 5.00035, -16.99965], [0, 0, 0], [3, 2, 0.2], "00fbff", 0, 0, 0.6, false, false);
        a.p([3.15042, 7.00042, -13.99958], [0, 0, 0], [3.5, 2, 0.5], "ff8f00", 0, 0, 0.6, false, false);
        a.p([-1.49951, 5.25049, -77.99951], [0, 0, 0], [1, 10, 5], "ffffff", 0, 0, 0.0, false, false);
        a.p([3.5, 5.25, -83], [0, 0, 0], [0.2, 10, 5], "-1.0", 0, 0, 0.6, false, false);
        a.p([-8.99993, 4.50007, -62.99993], [0, 0, 0], [10, 4, 0.5], "1.0,0.25", 0, 0, 0.6, false, false);
        a.p([1.00014, 4.25014, -77.99986], [0, 0.21, 0], [1.5, 0.5, 5.02], "ffffff", 0, 0, 0.6, false, false);
        a.p([10.00021, 1.75021, -66.99979], [0, 0, 0], [2.5, 2.5, 2.5], "-1.0", 0, 0, 0.6, false, true);
        a.e([1.50028, 6.00028, -93.49972]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.25);
        cc.set_monkey("steer", default_steer * 3.5);
        cc.set_monkey("radius", 3.0);
        cc.set_monkey("player.scaling", new BABYLON.Vector3(3.0, 2.0, 2.0));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.00985999999999998) {
                    steer = default_steer * 0.0;
                    a.g(null, -0.5, null);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -2.0098599999999998) {
                    steer = cc.get("steer", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -2.24958) {
                    a.msg_set("Push the block into the hole to get across! ");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -10.24958) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -22.99965) {
                    a.msg_set("Knock the block over to make a bridge! ");
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -30.99965) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -40.49993) {
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -50.49993) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -50.5) {
                    a.msg_set("Time for your final test! ");
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -55.5) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -55.49951) {
                    a.msg_set("Push the blocks into their holes to reach the finish! ");
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -63.49951) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00021, 11.25021, -36.09979], [0, 0, 0], [2, 20, 2]);
        a.re('P1', [0.00028, 7.51028, -8.99972], [0, 0, 0], [2, 2, 2]);
        a.re('P2', [1.50035, 7.00035, -15.49965], [0, 0, 0], [0.2, 6, 3]);
        a.re('P3', [-1.49958, 7.00042, -15.49958], [0, 0, 0], [0.2, 6, 3]);
        a.re('P4', [0.00049, 4.00049, -15.49951], [0, 0, 0], [3, 0.5, 3]);
        a.re('P5', [-9, 5, -83], [0, 0, 0], [4.5, 4.5, 4.5]);
        a.re('P6', [-1.49993, 9.25007, -82.99993], [0, 0, 0], [1, 2, 5]);
        a.re('P7', [-4.99986, 6.00014, -31.99986], [0, 0, 0], [0.5, 6, 6]);
        a.re('P8', [0.00021, 5.75021, -21.99979], [0, 0, 0], [3, 0.5, 10]);
        a.re('P9', [0.00028, 3.00028, -31.99972], [0, 0, 0], [10, 0.5, 6]);
        a.re('P10', [-8.99965, 4.10035, -68.99965], [0, 0, 0], [2.5, 2.5, 2.5]);
        a.re('P11', [-1.49958, 7.25042, -66.99958], [0, 0, 0], [1, 2, 3]);
        a.re('P12', [0.00049, 6.00049, -7.99951], [0, 0, 0], [10, 0.5, 12]);
        a.re('P13', [-5, 7, -8], [0, 0, 0], [0.5, 2, 12]);
        a.re('P14', [5.00007, 7.00007, -7.99993], [0, 0, 0], [0.5, 2, 12]);
        a.re('P15', [-3.14986, 7.00014, -13.99986], [0, 0, 0], [3.5, 2, 0.5]);
        a.re('P16', [-8.99979, 4.50021, -73.78979], [0, 0, 0], [3.5, 3.5, 3.5]);
        a.re('P17', [-1.49972, 8.25028, -73.49972], [0, 0, 0], [1, 2, 4]);
        a.re('P18', [-1.49965, 4.75035, -69.99965], [0, 0, 0], [1, 9, 3]);
        a.re('P19', [-1.49958, 4.25042, -64.74958], [0, 0, 0], [1, 8, 1.5]);
        a.re('P20', [-1.49951, 5.25049, -87.99951], [0, 0, 0], [1, 10, 5]);
        a.re('P21', [0, 2.5, -61], [0, 0, 0], [2, 0.5, 9]);
        a.re('P22', [1.00007, 3.00007, -60.99993], [0, 0, 0], [0.2, 1, 6]);
        a.re('P23', [-1.99986, 2.50014, -62.99986], [0, 0, 0], [2, 0.5, 2]);
        a.re('P24', [1.50021, 5.25021, -87.99979], [0, 0.17, 0], [1.5, 0.5, 5]);
        a.re('P25', [-7.99972, 2.50028, -74.99972], [0, 0, 0], [12, 0.5, 24]);
        a.re('P26', [0.50035, 3.25035, -69.99965], [0, 0.38, 0], [1.5, 0.5, 3]);
        a.re('P27', [0.00042, 2.65042, -64.99958], [0, 0.26, 0], [1.5, 0.5, 1]);
        a.re('P28', [1.50049, 5.67049, -92.89951], [0, 0, 0], [1.5, 0.5, 5]);
        a.re('P29', [10, 2.75, -83], [0, 0, 0], [4.5, 4.5, 4.5]);
        a.re('P30', [10.00007, 2.25007, -73.49993], [0, 0, 0], [3.5, 3.5, 3.5]);
        a.re('P31', [0.00014, 1.00014, -55.89986], [0, 0, 0], [2.2, 0.5, 4]);
        a.re('P32', [0.00021, 1.50021, -37.64979], [0, 0, 0], [2.2, 0.5, 0.8]);
        a.re('P33', [2.50028, 4.75028, -73.49972], [0, 0, 0], [0.2, 9, 4]);
        a.re('P34', [1.50035, 4.25035, -66.99965], [0, 0, 0], [0.2, 8, 3]);
        a.re('P35', [0.50042, 0.25042, -73.49958], [0, 0, 0], [4, 0.5, 4]);
        a.re('P36', [1.00049, 0.25049, -82.99951], [0, 0, 0], [5, 0.5, 5]);
        a.re('P37', [0, 0.25, -67], [0, 0, 0], [3, 0.5, 3]);
        a.re('P38', [0.00007, 0.00007, 0.00007], [0, 0, 0], [2, 0.5, 2]);
        a.re('P39', [0.00014, 1.00014, -36.09986], [0, 0, 0], [2.2, 0.5, 4]);
        a.re('P40', [-13.99979, 4.50021, -74.99979], [0, 0, 0], [0.5, 4, 24]);
        a.re('P41', [-7.99972, 4.50028, -86.99972], [0, 0, 0], [12, 4, 0.5]);
        a.re('P42', [5.00014, 6.00014, -31.99986], [0, 0, 0], [0.5, 6, 6]);
        a.re('P43', [0.00021, 4.25021, -28.55979], [0, 0.87, 0], [10, 4.4, 0.5]);
        a.re('P44', [0.00028, 5.00028, -13.99972], [0, 0, 0], [3, 2, 0.2]);
        a.re('P45', [0.00035, 5.00035, -16.99965], [0, 0, 0], [3, 2, 0.2]);
        a.re('P46', [3.15042, 7.00042, -13.99958], [0, 0, 0], [3.5, 2, 0.5]);
        a.re('P47', [-1.49951, 5.25049, -77.99951], [0, 0, 0], [1, 10, 5]);
        a.re('P48', [3.5, 5.25, -83], [0, 0, 0], [0.2, 10, 5]);
        a.re('P49', [-8.99993, 4.50007, -62.99993], [0, 0, 0], [10, 4, 0.5]);
        a.re('P50', [1.00014, 4.25014, -77.99986], [0, 0.21, 0], [1.5, 0.5, 5.02]);
        a.re('P51', [10.00021, 1.75021, -66.99979], [0, 0, 0], [2.5, 2.5, 2.5]);
        a.re('E0', [1.50028, 6.00028, -93.49972], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}