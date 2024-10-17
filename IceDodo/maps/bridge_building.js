
//date:2024-07-25
//diff:5
//name:Bridge Building
//cup:Insolence

var map = {
    title: "Bridge Building",
    song: "env2",
    maker: "Bong",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([45, -1.5, -60.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -1.5, -10.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -260.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -170.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -9, -430.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -9, -290.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([47.5, -9, -440.73], [0, 0, 0], [5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([47.5, -9, -300.73], [0, 0, 0], [5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([48.33, -9, -450.73], [0, 0, 0], [3.34, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.33, -9, -310.73], [0, 0, 0], [3.34, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([41.67, -9, -460.73], [0, 0, 0], [3.34, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.33, -9, -460.73], [0, 0, 0], [3.34, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.33, -9, -320.73], [0, 0, 0], [3.34, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([41.67, -9, -320.73], [0, 0, 0], [3.34, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([46.67, -9, -470.73], [0, 0, 0], [6.66, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([46.67, -9, -330.73], [0, 0, 0], [6.66, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -480.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -340.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([43.75, -9, -490.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -490.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -350.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([43.75, -9, -350.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -500.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([41.25, -9, -500.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -360.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([41.25, -9, -360.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -1.5, -70.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -1.5, -20.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([42.5, -9, -510.73], [0, 0, 0], [5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -510.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([48.75, -9, -370.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([42.5, -9, -370.73], [0, 0, 0], [5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([41.25, -9, -520.73], [0, 0, 0], [2.5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([47.5, -9, -520.73], [0, 0, 0], [5, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([47.5, -9, -380.73], [0, 0, 0], [5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([41.25, -9, -380.73], [0, 0, 0], [2.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([46.25, -9, -530.73], [0, 0, 0], [7.5, 2, 10], "2e1b04", 0, 0, 0.6, true, false, false, false);
        a.p([46.25, -9, -390.73], [0, 0, 0], [7.5, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.e([46.25, -7, -560.89]);
        a.p([45, -1.5, -80.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -1.5, -30.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -200.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -110.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -210.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -120.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -220.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -130.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -230.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -140.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -240.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -150.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -250.73], [0, 0, 0], [10, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([45, -5.5, -160.73], [0, 0, 0], [10, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -9, -555.73], [0, 0, 0], [100, 2, 20], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -5.5, -270.73], [0, 0, 0], [100, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -5.5, -190.73], [0, 0, 0], [100, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.5, -50.73], [0, 0, 0], [100, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.5, -90.73], [0, 0, 0], [100, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -9, -420.73], [0, 0, 0], [100, 2, 10], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([0, -7.9, -231], [0, 0, 0], [1000, 50, 89], "3d3d3d", 0, 0, 0.6, false, false, false, false);
        a.p([0, -7.9, -490], [0, 0, 0], [1000, 27, 145], "3d3d3d", 0, 0, 0.6, false, false, false, false);
        a.p([0, -7.9, -490], [0, 0, 0], [1000, 27, 145], "3d3d3d", 0, 0, 0.6, false, false, false, false);
        a.p([0, -7.9, -145.73], [0, 0, 0], [1000, 27, 199], "3d3d3d", 0, 0, 0.6, false, false, false, false);
        a.p([0, -8.5, -350], [0, 0, 0], [1000, 2, 190], "4a6bff", 0, 0, 0.6, false, true, false, false);
        a.p([0, -5, -190], [0, 0, 0], [1000, 2, 230], "4a6bff", 0, 0, 0.6, false, true, false, false);
        a.p([0, -8.5, -231.73], [0, 0, 0], [1000, 2, 90], "4a6bff", 0, 0, 0.6, false, false, true, false);
        a.p([0, -5, -71.73], [0, 0, 0], [1000, 2, 50], "4a6bff", 0, 0, 0.6, false, false, true, false);
        a.p([0, -12, -491.73], [0, 0, 0], [1000, 2, 135], "4a6bff", 0, 0, 0.6, false, false, true, false);
        a.p([0, -7.9, -490], [0, 0, 0], [1000, 27, 146], "87ceeb", 0, 0, 0.6, false, false, false, false);
        a.p([0, -7.9, -186], [0, 0, 0], [1000, 50, 1], "87ceeb", 0, 0, 0.6, false, false, false, false);
        a.p([20, -5.5, -210.73], [0, 0, 0], [60, 3, 5], "8a6043", 0, 0, 0.6, false, false, true, false);
        a.p([-20, -5.5, -250.73], [0, 0, 0], [60, 3, 5], "8a6043", 0, 0, 0.6, false, false, true, false);
        a.p([20, -5.5, -120.73], [0, 0, 0], [60, 1.98, 5], "8a6043", 0, 0, 0.6, false, false, false, false);
        a.p([0, -5.5, -180.73], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -9, -410.73], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.5, -41], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1.5, -1], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -5.5, -100.73], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([0, -9, -280.73], [0, 0, 0], [100, 2, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-20, -5.5, -160.73], [0, 0, 0], [60, 1.98, 5], "8a6043", 0, 0, 0.6, false, false, false, false);
        a.p([0.56, -2.95, -278.78], [0, 0, -0.79], [1, 3, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -1.15, -278.78], [0, 0, 0], [1, 5, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.87, -2.91, -278.78], [0, 0, -5.5], [1, 3, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([0.56, 1.05, -98.78], [0, 0, -0.79], [1, 3, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 2.85, -98.78], [0, 0, 0], [1, 5, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.87, 1.09, -98.78], [0, 0, -5.5], [1, 3, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([0, -8.9, -340], [0, 0, 0], [100, 2, 130], "-1.0", 0, 0, 0.6, true, false, false, false);
        a.p([0, -5.4, -140], [0, 0, 0], [100, 2, 90], "-1.0", 0, 0, 0.6, true, false, false, false);
        a.p([0, -1.4, -20.73], [0, 0, 0], [100, 2, 50], "-1.0", 0, 0, 0.6, true, false, false, false);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P6');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('P11');
        a.u('P12');
        a.u('P13');
        a.u('P14');
        a.u('P15');
        a.u('P16');
        a.u('P17');
        a.u('P18');
        a.u('P19');
        a.u('P20');
        a.u('P21');
        a.u('P22');
        a.u('P23');
        a.u('P24');
        a.u('P25');
        a.u('P26');
        a.u('P27');
        a.u('P28');
        a.u('P29');
        a.u('P30');
        a.u('P31');
        a.u('P32');
        a.u('P33');
        a.u('P34');
        a.u('P35');
        a.u('P36');
        a.u('P37');
        a.u('E0');
        a.u('P38');
        a.u('P39');
        a.u('P40');
        a.u('P41');
        a.u('P42');
        a.u('P43');
        a.u('P44');
        a.u('P45');
        a.u('P46');
        a.u('P47');
        a.u('P48');
        a.u('P49');
        a.u('P50');
        a.u('P51');
        a.u('P58');
        a.u('P59');
        a.u('P60');
        a.u('P61');
        a.u('P62');
        a.u('P63');
        a.u('P64');
        a.u('P65');
        a.u('P67');
        a.u('P68');
        a.u('P72');
        a.u('P73');
        a.u('P74');
        a.u('P79');
        a.u('P80');
        a.u('P81');
        a.u('P82');
        a.u('P83');
        a.u('P84');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#3d3d3d"));
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#000000"));
        cc.set_monkey("cameraDownAngle", 59.0 * Math.PI / 180);
        cc.set_monkey("radius", 5.0);
        cc.set_monkey("jumpHeight", 0.5);
        cc.set_monkey("player.scaling", new BABYLON.Vector3(2.0, null, 2.0));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    a.msg_set("Plan it! Jump to stop the moving path ");
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'x', -2.0);
                a.mov('P1', 'x', -2.0);
                if (PZ < -1.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -1.2400000000000002) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -10.72) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -10.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    a.msg_set("By the way, you can jump in the void! ");
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('P26', 'x', -2.0);
                a.mov('P27', 'x', -2.0);
                if (PZ < -11.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -11.24) {
                    steer = default_steer * 0;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -20.72) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -20.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 9:
                a.mov('P38', 'x', -2.0);
                a.mov('P39', 'x', -2.0);
                if (PZ < -21.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -21.240000000000002) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -30.72) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -45.73) {
                    a.cam_cd(17.0);
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    speed = default_speed * 0.5;
                    a.msg_set("Test it! Cross your bridge! ");
                    this.section_id += 1
                }
                break;
            case 13:
                a.mov('P61', 'y', 99.0);
                a.mov('P74', 'x', 999.0);
                if (PZ < -55.73) {
                    a.cam_cd(null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    speed = cc.get("speed", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -55.730000000000004) {
                    a.cam_cd(17.0);
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -100.73) {
                    a.cam_cd(null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -100.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    rotation = 0.0 * Math.PI / 180;
                    a.msg_set("Dodge and weave! ");
                    this.section_id += 1
                }
                break;
            case 17:
                a.mov('P40', 'x', -2.0);
                a.mov('P41', 'x', -2.0);
                a.mov('P63', 'x', 999.0);
                a.mov('P65', 'x', 999.0);
                a.mov('P68', 'y', 999.0);
                a.mov('P82', 'y', 999.0);
                a.mov('P83', 'y', 999.0);
                a.mov('P84', 'y', 999.0);
                if (PZ < -101.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -101.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 19:
                if (PZ < -110.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -110.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 21:
                a.mov('P42', 'x', -2.0);
                a.mov('P43', 'x', -2.0);
                if (PZ < -111.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -111.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 23:
                if (PZ < -120.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -120.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 25:
                a.mov('P44', 'x', -2.0);
                a.mov('P45', 'x', -2.0);
                if (PZ < -121.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -121.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 27:
                if (PZ < -130.73000000000002) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -130.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 29:
                a.mov('P46', 'x', -2.0);
                a.mov('P47', 'x', -2.0);
                if (PZ < -131.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -131.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 31:
                if (PZ < -140.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 32:
                if (PZ < -140.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 33:
                a.mov('P48', 'x', -2.0);
                a.mov('P49', 'x', -2.0);
                if (PZ < -141.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 34:
                if (PZ < -141.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 35:
                if (PZ < -150.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 36:
                if (PZ < -150.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 37:
                a.mov('P50', 'x', -2.0);
                a.mov('P51', 'x', -2.0);
                if (PZ < -151.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 38:
                if (PZ < -151.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 39:
                if (PZ < -160.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 40:
                if (PZ < -160.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 41:
                a.mov('P2', 'x', -2.0);
                a.mov('P3', 'x', -2.0);
                if (PZ < -161.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 42:
                if (PZ < -161.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 43:
                if (PZ < -170.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 44:
                if (PZ < -185.73) {
                    a.cam_cd(17.0);
                    speed = default_speed * 0.5;
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    this.section_id += 1
                }
                break;
            case 45:
                a.mov('P58', 'x', 999.0);
                a.mov('P72', 'x', 999.0);
                if (PZ < -195.73) {
                    a.cam_cd(null);
                    speed = cc.get("speed", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 46:
                if (PZ < -195.77999999999997) {
                    a.cam_cd(17.0);
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    this.section_id += 1
                }
                break;
            case 47:
                if (PZ < -280.68) {
                    a.cam_cd(null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 48:
                if (PZ < -280.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    rotation = 0.0 * Math.PI / 180;
                    a.msg_set("This is your final test. Good luck! ");
                    this.section_id += 1
                }
                break;
            case 49:
                a.mov('P4', 'x', -2.0);
                a.mov('P5', 'x', -2.0);
                a.mov('P62', 'x', 999.0);
                a.mov('P64', 'x', 999.0);
                a.mov('P67', 'y', 99.0);
                a.mov('P79', 'y', 999.0);
                a.mov('P80', 'y', 999.0);
                a.mov('P81', 'y', 999.0);
                if (PZ < -281.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 50:
                if (PZ < -281.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 51:
                if (PZ < -290.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 52:
                if (PZ < -290.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    a.msg_set("Some paths have holes, plan carefully! ");
                    this.section_id += 1
                }
                break;
            case 53:
                a.mov('P6', 'x', -2.0);
                a.mov('P7', 'x', -2.0);
                if (PZ < -291.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 54:
                if (PZ < -291.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 55:
                if (PZ < -300.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 56:
                if (PZ < -300.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 57:
                a.mov('P8', 'x', -2.0);
                a.mov('P9', 'x', -2.0);
                if (PZ < -301.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 58:
                if (PZ < -301.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 59:
                if (PZ < -310.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 60:
                if (PZ < -310.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 61:
                a.mov('P10', 'x', -2.0);
                a.mov('P11', 'x', -2.0);
                a.mov('P12', 'x', -2.0);
                a.mov('P13', 'x', -2.0);
                if (PZ < -311.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 62:
                if (PZ < -311.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 63:
                if (PZ < -320.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 64:
                if (PZ < -320.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 65:
                a.mov('P14', 'x', -2.0);
                a.mov('P15', 'x', -2.0);
                if (PZ < -321.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 66:
                if (PZ < -321.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 67:
                if (PZ < -330.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 68:
                if (PZ < -330.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 69:
                a.mov('P16', 'x', -2.0);
                a.mov('P17', 'x', -2.0);
                if (PZ < -331.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 70:
                if (PZ < -331.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 71:
                if (PZ < -340.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 72:
                if (PZ < -340.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 73:
                a.mov('P18', 'x', -2.0);
                a.mov('P19', 'x', -2.0);
                a.mov('P20', 'x', -2.0);
                a.mov('P21', 'x', -2.0);
                if (PZ < -341.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 74:
                if (PZ < -341.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 75:
                if (PZ < -350.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 76:
                if (PZ < -350.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 77:
                a.mov('P22', 'x', -2.0);
                a.mov('P23', 'x', -2.0);
                a.mov('P24', 'x', -2.0);
                a.mov('P25', 'x', -2.0);
                if (PZ < -351.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 78:
                if (PZ < -351.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 79:
                if (PZ < -360.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 80:
                if (PZ < -360.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 81:
                a.mov('P28', 'x', -2.0);
                a.mov('P29', 'x', -2.0);
                a.mov('P30', 'x', -2.0);
                a.mov('P31', 'x', -2.0);
                if (PZ < -361.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 82:
                if (PZ < -361.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 83:
                if (PZ < -370.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 84:
                if (PZ < -370.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 85:
                a.mov('P32', 'x', -2.0);
                a.mov('P33', 'x', -2.0);
                a.mov('P34', 'x', -2.0);
                a.mov('P35', 'x', -2.0);
                if (PZ < -371.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 86:
                if (PZ < -371.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 87:
                if (PZ < -380.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 88:
                if (PZ < -380.73) {
                    speed = default_speed * 0.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 89:
                a.mov('P36', 'x', -2.0);
                a.mov('P37', 'x', -2.0);
                a.mov('E0', 'x', -2.0);
                if (PZ < -381.23) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 90:
                if (PZ < -381.23) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 91:
                if (PZ < -390.73) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 92:
                if (PZ < -415.73) {
                    a.cam_cd(17.0);
                    speed = default_speed * 0.5;
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    this.section_id += 1
                }
                break;
            case 93:
                a.mov('P59', 'y', 99.0);
                a.mov('P60', 'y', 99.0);
                a.mov('P73', 'x', 999.0);
                if (PZ < -425.73) {
                    a.cam_cd(null);
                    speed = cc.get("speed", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 94:
                if (PZ < -425.83) {
                    a.cam_cd(17.0);
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    speed = default_speed * 1.5;
                    a.msg_set("Don't let the speed get you! ");
                    this.section_id += 1
                }
                break;
            case 95:
                if (PZ < -565.8299999999999) {
                    a.cam_cd(null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    speed = cc.get("speed", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [45, -1.5, -60.73], [0, 0, 0], [10, 2, 10]);
        a.re('P1', [45, -1.5, -10.73], [0, 0, 0], [10, 2, 10]);
        a.re('P2', [45, -5.5, -260.73], [0, 0, 0], [10, 2, 10]);
        a.re('P3', [45, -5.5, -170.73], [0, 0, 0], [10, 2, 10]);
        a.re('P4', [45, -9, -430.73], [0, 0, 0], [10, 2, 10]);
        a.re('P5', [45, -9, -290.73], [0, 0, 0], [10, 2, 10]);
        a.re('P6', [47.5, -9, -440.73], [0, 0, 0], [5, 2, 10]);
        a.re('P7', [47.5, -9, -300.73], [0, 0, 0], [5, 2, 10]);
        a.re('P8', [48.33, -9, -450.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P9', [48.33, -9, -310.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P10', [41.67, -9, -460.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P11', [48.33, -9, -460.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P12', [48.33, -9, -320.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P13', [41.67, -9, -320.73], [0, 0, 0], [3.34, 2, 10]);
        a.re('P14', [46.67, -9, -470.73], [0, 0, 0], [6.66, 2, 10]);
        a.re('P15', [46.67, -9, -330.73], [0, 0, 0], [6.66, 2, 10]);
        a.re('P16', [48.75, -9, -480.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P17', [48.75, -9, -340.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P18', [43.75, -9, -490.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P19', [48.75, -9, -490.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P20', [48.75, -9, -350.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P21', [43.75, -9, -350.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P22', [48.75, -9, -500.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P23', [41.25, -9, -500.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P24', [48.75, -9, -360.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P25', [41.25, -9, -360.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P26', [45, -1.5, -70.73], [0, 0, 0], [10, 2, 10]);
        a.re('P27', [45, -1.5, -20.73], [0, 0, 0], [10, 2, 10]);
        a.re('P28', [42.5, -9, -510.73], [0, 0, 0], [5, 2, 10]);
        a.re('P29', [48.75, -9, -510.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P30', [48.75, -9, -370.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P31', [42.5, -9, -370.73], [0, 0, 0], [5, 2, 10]);
        a.re('P32', [41.25, -9, -520.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P33', [47.5, -9, -520.73], [0, 0, 0], [5, 2, 10]);
        a.re('P34', [47.5, -9, -380.73], [0, 0, 0], [5, 2, 10]);
        a.re('P35', [41.25, -9, -380.73], [0, 0, 0], [2.5, 2, 10]);
        a.re('P36', [46.25, -9, -530.73], [0, 0, 0], [7.5, 2, 10]);
        a.re('P37', [46.25, -9, -390.73], [0, 0, 0], [7.5, 2, 10]);
        a.re('E0', [46.25, -7, -560.89], [0, 0, 0], [1, 1, 1]);
        a.re('P38', [45, -1.5, -80.73], [0, 0, 0], [10, 2, 10]);
        a.re('P39', [45, -1.5, -30.73], [0, 0, 0], [10, 2, 10]);
        a.re('P40', [45, -5.5, -200.73], [0, 0, 0], [10, 2, 10]);
        a.re('P41', [45, -5.5, -110.73], [0, 0, 0], [10, 2, 10]);
        a.re('P42', [45, -5.5, -210.73], [0, 0, 0], [10, 2, 10]);
        a.re('P43', [45, -5.5, -120.73], [0, 0, 0], [10, 2, 10]);
        a.re('P44', [45, -5.5, -220.73], [0, 0, 0], [10, 2, 10]);
        a.re('P45', [45, -5.5, -130.73], [0, 0, 0], [10, 2, 10]);
        a.re('P46', [45, -5.5, -230.73], [0, 0, 0], [10, 2, 10]);
        a.re('P47', [45, -5.5, -140.73], [0, 0, 0], [10, 2, 10]);
        a.re('P48', [45, -5.5, -240.73], [0, 0, 0], [10, 2, 10]);
        a.re('P49', [45, -5.5, -150.73], [0, 0, 0], [10, 2, 10]);
        a.re('P50', [45, -5.5, -250.73], [0, 0, 0], [10, 2, 10]);
        a.re('P51', [45, -5.5, -160.73], [0, 0, 0], [10, 2, 10]);
        a.re('P52', [0, -9, -555.73], [0, 0, 0], [100, 2, 20]);
        a.re('P53', [0, -5.5, -270.73], [0, 0, 0], [100, 2, 10]);
        a.re('P54', [0, -5.5, -190.73], [0, 0, 0], [100, 2, 10]);
        a.re('P55', [0, -1.5, -50.73], [0, 0, 0], [100, 2, 10]);
        a.re('P56', [0, -1.5, -90.73], [0, 0, 0], [100, 2, 10]);
        a.re('P57', [0, -9, -420.73], [0, 0, 0], [100, 2, 10]);
        a.re('P58', [0, -7.9, -231], [0, 0, 0], [1000, 50, 89]);
        a.re('P59', [0, -7.9, -490], [0, 0, 0], [1000, 27, 145]);
        a.re('P60', [0, -7.9, -490], [0, 0, 0], [1000, 27, 145]);
        a.re('P61', [0, -7.9, -145.73], [0, 0, 0], [1000, 27, 199]);
        a.re('P62', [0, -8.5, -350], [0, 0, 0], [1000, 2, 190]);
        a.re('P63', [0, -5, -190], [0, 0, 0], [1000, 2, 230]);
        a.re('P64', [0, -8.5, -231.73], [0, 0, 0], [1000, 2, 90]);
        a.re('P65', [0, -5, -71.73], [0, 0, 0], [1000, 2, 50]);
        a.re('P66', [0, -12, -491.73], [0, 0, 0], [1000, 2, 135]);
        a.re('P67', [0, -7.9, -490], [0, 0, 0], [1000, 27, 146]);
        a.re('P68', [0, -7.9, -186], [0, 0, 0], [1000, 50, 1]);
        a.re('P69', [20, -5.5, -210.73], [0, 0, 0], [60, 3, 5]);
        a.re('P70', [-20, -5.5, -250.73], [0, 0, 0], [60, 3, 5]);
        a.re('P71', [20, -5.5, -120.73], [0, 0, 0], [60, 1.98, 5]);
        a.re('P72', [0, -5.5, -180.73], [0, 0, 0], [100, 2, 10]);
        a.re('P73', [0, -9, -410.73], [0, 0, 0], [100, 2, 10]);
        a.re('P74', [0, -1.5, -41], [0, 0, 0], [100, 2, 10]);
        a.re('P75', [0, -1.5, -1], [0, 0, 0], [100, 2, 10]);
        a.re('P76', [0, -5.5, -100.73], [0, 0, 0], [100, 2, 10]);
        a.re('P77', [0, -9, -280.73], [0, 0, 0], [100, 2, 10]);
        a.re('P78', [-20, -5.5, -160.73], [0, 0, 0], [60, 1.98, 5]);
        a.re('P79', [0.56, -2.95, -278.78], [0, 0, -0.79], [1, 3, 1]);
        a.re('P80', [-0.03, -1.15, -278.78], [0, 0, 0], [1, 5, 1]);
        a.re('P81', [-0.87, -2.91, -278.78], [0, 0, -5.5], [1, 3, 1]);
        a.re('P82', [0.56, 1.05, -98.78], [0, 0, -0.79], [1, 3, 1]);
        a.re('P83', [-0.03, 2.85, -98.78], [0, 0, 0], [1, 5, 1]);
        a.re('P84', [-0.87, 1.09, -98.78], [0, 0, -5.5], [1, 3, 1]);
        a.re('P85', [0, -8.9, -340], [0, 0, 0], [100, 2, 130]);
        a.re('P86', [0, -5.4, -140], [0, 0, 0], [100, 2, 90]);
        a.re('P87', [0, -1.4, -20.73], [0, 0, 0], [100, 2, 50]);
    },
    physics_update: function() {},
    render_update: function() {}
}