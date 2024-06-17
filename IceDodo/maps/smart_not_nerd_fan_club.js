var map = {
    title: "Smart Not Nerd Fan Club",
    song: "env2",
    maker: "Darrk_77",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0, -20.66], [0, 0, 0], [4, 1.42, 3.14], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0.46, 0, -79.19], [0, 0, 0], [6.38, 1.42, 9.64], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0.92, 0, -132.62], [0, 0, 0], [6.32, 1.42, 6.24], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([2.23, 0, -178.24], [0, 0, 0], [6.32, 1.42, 6.24], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0.76, 0, -211.6], [0, 0, 0], [4, 1.42, 3.14], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-30.16, -0.2, -267.83], [0, 0, 0], [4, 1.42, 4.08], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.y([-0.5, 4.14, -89.59], [0, -1.57, 0], [2.5, 0.42, 2.5], "000000,1.0", 0, 0, 0.6, false, 1, false);
        a.p([-1.06, 0.23, -237.94], [0, 0, 0], [7.84, 0.96, 26.34], "00000a", 0, 0, 0.6, false, false, false, true);
        a.p([-9.11, 0.23, -246.68], [0, 0, 0], [23.94, 0.96, 9.6], "00000a", 0, 0, 0.6, false, false, false, true);
        a.p([-31.56, 0.23, -249.95], [0, 0, 0], [7.84, 0.96, 16.22], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-31.56, 0.23, -261.59], [0, 0, 0], [1.12, 0.96, 8.66], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-29.34, 0.23, -271.64], [0, 0, 0], [1.12, 0.96, 3.94], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([6.61, 0.23, -157.04], [0, 0, 0], [1.62, 0.96, 8.32], "000a00", 0, 0, 0.6, false, false, false, false);
        a.p([-2.83, 0.23, -165.49], [0, 0, 0], [1.62, 0.96, 8.32], "000a00", 0, 0, 0.6, false, false, false, false);
        a.p([1.79, 0.23, -148.75], [0, 0, 0], [1.62, 0.96, 8.32], "000a00", 0, 0, 0.6, false, false, false, false);
        a.p([2.77, 0.73, -149.34], [-0.27, 0, 0], [0.74, 0.14, 8.4], "000a00,0.2", 0, 0, 0.6, false, true, false, false);
        a.p([3.01, 0.23, -172.28], [0, 0, 0], [1.62, 0.96, 5.88], "000a00", 0, 0, 0.6, false, false, false, false);
        a.p([3.1, 0.23, -185.63], [0, 0, 0], [1.62, 0.96, 11.24], "000a00", 0, 0, 0.6, false, false, false, false);
        a.p([1.7, 0.96, -198.01], [0, 0, 0], [1.6, 1.46, 2.1], "000a05", 0, 0, 0.6, true, false, false, false);
        a.p([-0.83, 0.49, -194.84], [0, 0.15, 0], [1.6, 0.74, 1.6], "000a05", 0, 0, 0.6, true, false, false, false);
        a.p([-0.91, 1.43, -201.26], [0, 0, 0], [1.6, 2.34, 2.28], "000a05", 0, 0, 0.6, true, false, false, false);
        a.p([0.77, 0.23, -208.21], [0, 0, 0], [0.78, 0.96, 3.82], "000a05", 0, 0, 0.6, false, false, false, false);
        a.p([-0.69, 0.23, -217.59], [0, 0, 0], [1.12, 0.96, 9.6], "000a05", 0, 0, 0.6, false, false, false, false);
        a.p([0.75, 0.23, -197.07], [0, 0, 0], [6.32, 0.96, 11.66], "000a05", 0, 0, 0.6, false, false, false, false);
        a.p([-0.69, 0.23, -223.73], [0, 0, 0], [1.12, 0.96, 2.7], "000a05", 0, 0, 0.6, false, false, false, false);
        a.p([0.75, 0.23, -205.49], [0, 0, 0], [6.32, 0.96, 2.06], "000a05", 0, 0, 0.6, false, false, false, false);
        a.p([-24.48, 0.23, -238.18], [0, 0, 0], [22.18, 0.96, 9.6], "00000a", 0, 0, 0.6, false, false, false, true);
        a.p([-29.39, 0.22, -276.93], [0, 0, 0], [2.14, 0.96, 6.78], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([-29.39, 5.14, -282.43], [0, 0, 0], [2.14, 0.96, 6.78], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([-24.99, 5.14, -284.75], [-1.57, 0, 0], [2.14, 0.96, 6.78], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([-22.67, 0.22, -288.45], [0, 0, 0], [2.02, 0.96, 4.32], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.07, -0.18, -296.94], [0, 0, 0], [1.6, 0.96, 3.56], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -9.69], [0, 0, 0], [0.1, 1.42, 0.28], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -8.63], [0, 0, 0], [0.1, 1.42, 0.28], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -9.17], [0, 0, 0], [0.1, 1.42, 0.28], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -3.71], [0, 0, 0], [0.1, 1.42, 8.98], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.76, 0.23, -32.38], [0, 0, 0], [1.74, 0.96, 3.04], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -14.6], [0, 0, 0], [0.1, 1.42, 8.98], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.73, 0.23, -26.66], [0, 0, 0], [0.14, 0.96, 8.98], "0a0000", 0, 0, 0.6, false, false, false, false);
        a.p([-1.76, 0.23, -38.13], [0, 0, 0], [1.74, 0.96, 8.7], "0a0200", 0, 0, 0.6, true, false, false, false);
        a.p([-1.76, 0.23, -48.79], [0, 0, 0], [1.74, 0.96, 8.7], "0a0200", 0, 0, 0.6, true, false, false, false);
        a.p([3.74, 0.23, -59.26], [0, 0, 0], [1.74, 0.96, 8.7], "0a0200", 0, 0, 0.6, true, false, false, false);
        a.p([2.76, 0.23, -87.26], [0, 0, 0], [1.74, 0.96, 6.58], "0a0200", 0, 0, 0.6, false, false, false, false);
        a.p([-1.85, 0.23, -70.09], [0, 0, 0], [1.74, 0.96, 8.7], "0a0200", 0, 0, 0.6, false, false, false, false);
        a.p([-5.32, 5.23, -112.57], [0, 0, 1.59], [3.36, 0.8, 0.56], "0a0500,0.2", 0, 0, 0.6, false, false, false, false);
        a.p([-8.17, 6.53, -112.57], [0, 0, 2.31], [8.82, 0.8, 0.56], "0a0500,0.2", 0, 0, 0.6, false, false, false, false);
        a.p([-7.18, 3.35, -112.57], [0, 0, 3.17], [3.36, 0.8, 0.56], "0a0500,0.2", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -98.52], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -101.5], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -104.48], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -107.45], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -110.43], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -113.41], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -116.39], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, -3.64, -119.37], [0, 0, 0], [8.68, 8.68, 2.98], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, 0.23, -92.47], [0, 0, 0], [8.68, 0.96, 9.1], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([0.04, 0.23, -125], [0, 0, 0], [1.62, 0.96, 9.1], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([1.79, 0.23, -140.16], [0, 0, 0], [1.62, 0.96, 9.1], "0a0500", 0, 0, 0.6, false, false, false, false);
        a.p([-22.67, 5.14, -286.47], [0, 0, 0], [2.14, 0.96, 1.3], "03000a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.14, -0.18, -311.51], [0, 0, 0], [2.5, 0.96, 12.24], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.14, -0.18, -302.35], [0, 0, 0], [2.5, 0.96, 7.52], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.07, -0.18, -307.84], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.91, -0.18, -311.62], [0, 0, 0], [0.92, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.07, -0.18, -312.88], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.14, -0.18, -333.17], [0, 0, 0], [2.5, 0.96, 32], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.91, -0.18, -314.14], [0, 0, 0], [0.92, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-19.28, -0.18, -316.66], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-19.28, -0.18, -306.58], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.07, -0.18, -315.4], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-20.07, -0.18, -310.36], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.p([-19.28, -0.18, -309.1], [0, 0, 0], [0.78, 0.96, 1.26], "0a0a0a", 0, 0, 0.6, false, false, false, false);
        a.y([-20.14, 1.38, -347.89], [0, 0, 0], [2.16, 2.8, 2.16], "ffffff", 0, 0, 0.6, true, 1, false);
        a.p([-21.41, -0.11, -292.79], [0, 0, 0], [5, 1.66, 5], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.y([-22.73, 2.7, -347.89], [0, 0, 0], [2.16, 6.22, 2.16], "ffffff", 0, 0, 0.6, false, -1.0, false);
        a.y([-17.56, 2.7, -347.89], [0, 0, 0], [2.16, 6.22, 2.16], "ffffff", 0, 0, 0.6, false, -1.0, false);
        a.y([-20.14, 4.6, -347.89], [0, 0, 0], [2.16, 2.4, 2.16], "ffffff", 0, 0, 0.6, false, -1.0, false);
        a.p([4.49, 4.04, -148.28], [0, 0, 0], [3.12, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.y([-0.5, 4.14, -89.59], [0, -1.57, 0], [3, 0.4, 3], "ffffff", 0, 0, 0.6, false, 1, false);
        a.p([-1.58, 4.14, -89.59], [0, 0, -0.79], [1, 0.2, 0.44], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-2.15, 4.14, -89.59], [0, 0, 0.79], [1, 0.2, 0.44], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([0.54, 4.14, -89.59], [0, 0, -3.93], [1, 0.2, 0.44], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([1.11, 4.14, -89.59], [0, 0, -2.36], [1, 0.2, 0.44], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([1.13, 3.55, -148.28], [0, 0, 0.79], [1.8, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([1.13, 4.57, -148.28], [0, 0, -0.79], [1.8, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([3.45, 3.55, -148.28], [0, 0, -3.93], [1.8, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([3.45, 4.57, -148.28], [0, 0, -2.36], [1.8, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 4.04, -148.28], [0, 0, 0], [3.12, 0.36, 0.36], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-12.67, -0.18, -518.31], [0, 0, 0], [4.2, 4.56, 351.62], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.p([-15.51, -0.18, -518.31], [0, 0, 0], [6.84, 0.96, 351.62], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.p([-21.21, -0.18, -680.09], [-0.16, 0, 0], [6.84, 4.56, 25.52], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.e([-20.14, 1.3, -347.89]);
        a.e([-14.89, 0, -691.67]);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P11');
        a.u('P12');
        a.u('P13');
        a.u('P31');
        a.u('P32');
        a.u('P33');
        a.u('P46');
        a.u('P47');
        a.u('P48');
        a.u('P49');
        a.u('P50');
        a.u('P51');
        a.u('P52');
        a.u('P53');
        a.u('P58');
        a.u('P70');
        cc.set_monkey("speed", default_speed * 0.7);
        cc.set_monkey("light.intensity", 100.0);
        cc.set_monkey("light.groundColor", new BABYLON.Color3.FromHexString("#ffffff"));
        cc.set_monkey("jumpHeight", 0.4);
        cc.set_monkey("jumpSpeed", 0.5);
        cc.set_monkey("camera.maxZ", 50.0);
        cc.set_monkey("light.diffuse", new BABYLON.Color3.FromHexString("#ffffff"));
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.1899999999999995) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0000");
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -10.65) {
                    light.diffuse = cc.get("light.diffuse", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -10.780000000000001) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f00000");
                    light.intensity = 1.0;
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 3:
                a.rot('P0', 'x', 0.4);
                a.rot('P0', 'z', 0.65);
                a.rot('P0', 'y', 0.8);
                if (PZ < -30.86) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -30.88) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0200");
                    this.section_id += 1
                }
                break;
            case 5:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -71.34) {
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -71.38) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f08000");
                    light.intensity = 1.0;
                    this.section_id += 1
                }
                break;
            case 7:
                a.rot('P1', 'x', 0.25);
                a.rot('P1', 'z', 0.55);
                a.rot('P1', 'y', -0.7);
                if (PZ < -88.30000000000001) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -88.42) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0500");
                    this.section_id += 1
                }
                break;
            case 9:
                a.rot('P46', 'z', 0.05);
                a.rot('P47', 'z', 0.1);
                a.rot('P48', 'z', 0.15);
                a.rot('P49', 'z', 0.2);
                a.rot('P50', 'z', 0.25);
                a.rot('P51', 'z', 0.3);
                a.rot('P52', 'z', 0.35);
                a.rot('P53', 'z', 0.4);
                if (PZ < -120.24) {
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -120.27999999999999) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f0f000");
                    light.intensity = 1.0;
                    this.section_id += 1
                }
                break;
            case 11:
                a.rot('P2', 'z', 0.7);
                a.rot('P2', 'y', -0.3);
                if (PZ < -145.79999999999998) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -145.96) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#000a00");
                    speed = default_speed * 0.6;
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 13:
                a.mov('P11', 'x', -0.17);
                a.mov('P12', 'x', 0.17);
                a.mov('P13', 'x', 0.17);
                if (PZ < -168.14000000000001) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -168.28) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#00f000");
                    light.intensity = 1.0;
                    this.section_id += 1
                }
                break;
            case 15:
                a.rot('P3', 'x', -0.55);
                a.rot('P3', 'z', -0.7);
                a.rot('P3', 'y', -0.25);
                a.rot('P3', 'x', 0.4);
                if (PZ < -183.46) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -183.48000000000002) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#000a00");
                    speed = default_speed * 0.27;
                    steer = default_steer * 3.3;
                    this.section_id += 1
                }
                break;
            case 17:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -191.26) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -191.29999999999998) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#000a05");
                    speed = default_speed * 0.25;
                    steer = default_steer * 3.5;
                    a.js(0.3);
                    this.section_id += 1
                }
                break;
            case 19:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -207.22) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.js(null);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -207.27) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#00f0f0");
                    light.intensity = 1.0;
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 21:
                a.rot('P4', 'x', 0.4);
                a.rot('P4', 'z', 0.65);
                a.rot('P4', 'y', 0.8);
                if (PZ < -215.53) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -215.59) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#000a05");
                    speed = default_speed * 0.4;
                    a.msg_set("Drift incoming... ");
                    this.section_id += 1
                }
                break;
            case 23:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -223.39000000000001) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -223.39999999999998) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#00000a");
                    this.section_id += 1
                }
                break;
            case 25:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -262.24) {
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -262.32) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#0000f0");
                    light.intensity = 1.0;
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 27:
                a.rot('P5', 'x', 0.4);
                a.rot('P5', 'z', -0.65);
                a.rot('P5', 'y', 0.8);
                a.mov('P5', 'y', 0.015);
                if (PZ < -270.58) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -270.59) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#00000a");
                    speed = default_speed * 0.17;
                    steer = default_steer * 3.5;
                    this.section_id += 1
                }
                break;
            case 29:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -273.55) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -273.58) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#03000a");
                    speed = default_speed * 0.3;
                    steer = default_steer * 3.0;
                    this.section_id += 1
                }
                break;
            case 31:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -278.09999999999997) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 32:
                if (PZ < -278.15) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#03000a");
                    speed = default_speed * 0.3;
                    steer = default_steer * 3.0;
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 33:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -285.65) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 34:
                if (PZ < -285.7) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#03000a");
                    speed = default_speed * 0.4;
                    steer = default_steer * 3.0;
                    this.section_id += 1
                }
                break;
            case 35:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -288.7) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 36:
                if (PZ < -288.8) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#6000f0");
                    light.intensity = 1.0;
                    speed = default_speed * 0.45;
                    this.section_id += 1
                }
                break;
            case 37:
                a.rot('P70', 'z', 0.4);
                a.rot('P70', 'y', 0.6);
                a.rot('P70', 'x', 0.2);
                if (PZ < -298.90000000000003) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.intensity = cc.get("light.intensity", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 38:
                if (PZ < -298.96) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0a0a");
                    speed = default_speed * 0.3;
                    this.section_id += 1
                }
                break;
            case 39:
                a.mov('P58', 'y', -0.1);
                if (PZ < -317.7) {
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 40:
                if (PZ < -317.71000000000004) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0a0a");
                    a.msg_set("Thanks to all of the Onionfist members. ");
                    this.section_id += 1
                }
                break;
            case 41:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -333.13) {
                    light.diffuse = cc.get("light.diffuse", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 42:
                if (PZ < -333.2) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#0a0a0a");
                    a.msg_set("You're all amazing. <3 ");
                    this.section_id += 1
                }
                break;
            case 43:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -354.8) {
                    light.diffuse = cc.get("light.diffuse", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 44:
                if (PZ < -355.88) {
                    speed = default_speed * 5.0;
                    steer = default_steer * 0.0;
                    a.msg_set("Dedicated to netsergue2, Jennetkness566, cy139 ");
                    this.section_id += 1
                }
                break;
            case 45:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -495.88) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 46:
                if (PZ < -497.02) {
                    speed = default_speed * 5.0;
                    steer = default_steer * 0.0;
                    a.msg_set("Justinix, Finnodile, hi hi, and Stents37. ");
                    this.section_id += 1
                }
                break;
            case 47:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -637.02) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 48:
                if (PZ < -637.25) {
                    speed = default_speed * 0.3;
                    steer = default_steer * 0.0;
                    a.msg_set("poop0983432 (our beloved) ");
                    this.section_id += 1
                }
                break;
            case 49:
                a.rot('P31', 'y', 5.0);
                a.rot('P32', 'y', 5.0);
                a.rot('P33', 'y', 5.0);
                if (PZ < -705.49) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, -20.66], [0, 0, 0], [4, 1.42, 3.14]);
        a.re('P1', [0.46, 0, -79.19], [0, 0, 0], [6.38, 1.42, 9.64]);
        a.re('P2', [0.92, 0, -132.62], [0, 0, 0], [6.32, 1.42, 6.24]);
        a.re('P3', [2.23, 0, -178.24], [0, 0, 0], [6.32, 1.42, 6.24]);
        a.re('P4', [0.76, 0, -211.6], [0, 0, 0], [4, 1.42, 3.14]);
        a.re('P5', [-30.16, -0.2, -267.83], [0, 0, 0], [4, 1.42, 4.08]);
        a.re('Y0', [-0.5, 4.14, -89.59], [0, -1.57, 0], [2.5, 0.42, 2.5]);
        a.re('P6', [-1.06, 0.23, -237.94], [0, 0, 0], [7.84, 0.96, 26.34]);
        a.re('P7', [-9.11, 0.23, -246.68], [0, 0, 0], [23.94, 0.96, 9.6]);
        a.re('P8', [-31.56, 0.23, -249.95], [0, 0, 0], [7.84, 0.96, 16.22]);
        a.re('P9', [-31.56, 0.23, -261.59], [0, 0, 0], [1.12, 0.96, 8.66]);
        a.re('P10', [-29.34, 0.23, -271.64], [0, 0, 0], [1.12, 0.96, 3.94]);
        a.re('P11', [6.61, 0.23, -157.04], [0, 0, 0], [1.62, 0.96, 8.32]);
        a.re('P12', [-2.83, 0.23, -165.49], [0, 0, 0], [1.62, 0.96, 8.32]);
        a.re('P13', [1.79, 0.23, -148.75], [0, 0, 0], [1.62, 0.96, 8.32]);
        a.re('P14', [2.77, 0.73, -149.34], [-0.27, 0, 0], [0.74, 0.14, 8.4]);
        a.re('P15', [3.01, 0.23, -172.28], [0, 0, 0], [1.62, 0.96, 5.88]);
        a.re('P16', [3.1, 0.23, -185.63], [0, 0, 0], [1.62, 0.96, 11.24]);
        a.re('P17', [1.7, 0.96, -198.01], [0, 0, 0], [1.6, 1.46, 2.1]);
        a.re('P18', [-0.83, 0.49, -194.84], [0, 0.15, 0], [1.6, 0.74, 1.6]);
        a.re('P19', [-0.91, 1.43, -201.26], [0, 0, 0], [1.6, 2.34, 2.28]);
        a.re('P20', [0.77, 0.23, -208.21], [0, 0, 0], [0.78, 0.96, 3.82]);
        a.re('P21', [-0.69, 0.23, -217.59], [0, 0, 0], [1.12, 0.96, 9.6]);
        a.re('P22', [0.75, 0.23, -197.07], [0, 0, 0], [6.32, 0.96, 11.66]);
        a.re('P23', [-0.69, 0.23, -223.73], [0, 0, 0], [1.12, 0.96, 2.7]);
        a.re('P24', [0.75, 0.23, -205.49], [0, 0, 0], [6.32, 0.96, 2.06]);
        a.re('P25', [-24.48, 0.23, -238.18], [0, 0, 0], [22.18, 0.96, 9.6]);
        a.re('P26', [-29.39, 0.22, -276.93], [0, 0, 0], [2.14, 0.96, 6.78]);
        a.re('P27', [-29.39, 5.14, -282.43], [0, 0, 0], [2.14, 0.96, 6.78]);
        a.re('P28', [-24.99, 5.14, -284.75], [-1.57, 0, 0], [2.14, 0.96, 6.78]);
        a.re('P29', [-22.67, 0.22, -288.45], [0, 0, 0], [2.02, 0.96, 4.32]);
        a.re('P30', [-20.07, -0.18, -296.94], [0, 0, 0], [1.6, 0.96, 3.56]);
        a.re('P31', [0, 0, -9.69], [0, 0, 0], [0.1, 1.42, 0.28]);
        a.re('P32', [0, 0, -8.63], [0, 0, 0], [0.1, 1.42, 0.28]);
        a.re('P33', [0, 0, -9.17], [0, 0, 0], [0.1, 1.42, 0.28]);
        a.re('P34', [0, 0, -3.71], [0, 0, 0], [0.1, 1.42, 8.98]);
        a.re('P35', [-1.76, 0.23, -32.38], [0, 0, 0], [1.74, 0.96, 3.04]);
        a.re('P36', [0, 0, -14.6], [0, 0, 0], [0.1, 1.42, 8.98]);
        a.re('P37', [-1.73, 0.23, -26.66], [0, 0, 0], [0.14, 0.96, 8.98]);
        a.re('P38', [-1.76, 0.23, -38.13], [0, 0, 0], [1.74, 0.96, 8.7]);
        a.re('P39', [-1.76, 0.23, -48.79], [0, 0, 0], [1.74, 0.96, 8.7]);
        a.re('P40', [3.74, 0.23, -59.26], [0, 0, 0], [1.74, 0.96, 8.7]);
        a.re('P41', [2.76, 0.23, -87.26], [0, 0, 0], [1.74, 0.96, 6.58]);
        a.re('P42', [-1.85, 0.23, -70.09], [0, 0, 0], [1.74, 0.96, 8.7]);
        a.re('P43', [-5.32, 5.23, -112.57], [0, 0, 1.59], [3.36, 0.8, 0.56]);
        a.re('P44', [-8.17, 6.53, -112.57], [0, 0, 2.31], [8.82, 0.8, 0.56]);
        a.re('P45', [-7.18, 3.35, -112.57], [0, 0, 3.17], [3.36, 0.8, 0.56]);
        a.re('P46', [0.04, -3.64, -98.52], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P47', [0.04, -3.64, -101.5], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P48', [0.04, -3.64, -104.48], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P49', [0.04, -3.64, -107.45], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P50', [0.04, -3.64, -110.43], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P51', [0.04, -3.64, -113.41], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P52', [0.04, -3.64, -116.39], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P53', [0.04, -3.64, -119.37], [0, 0, 0], [8.68, 8.68, 2.98]);
        a.re('P54', [0.04, 0.23, -92.47], [0, 0, 0], [8.68, 0.96, 9.1]);
        a.re('P55', [0.04, 0.23, -125], [0, 0, 0], [1.62, 0.96, 9.1]);
        a.re('P56', [1.79, 0.23, -140.16], [0, 0, 0], [1.62, 0.96, 9.1]);
        a.re('P57', [-22.67, 5.14, -286.47], [0, 0, 0], [2.14, 0.96, 1.3]);
        a.re('P58', [-20.14, -0.18, -311.51], [0, 0, 0], [2.5, 0.96, 12.24]);
        a.re('P59', [-20.14, -0.18, -302.35], [0, 0, 0], [2.5, 0.96, 7.52]);
        a.re('P60', [-20.07, -0.18, -307.84], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P61', [-20.91, -0.18, -311.62], [0, 0, 0], [0.92, 0.96, 1.26]);
        a.re('P62', [-20.07, -0.18, -312.88], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P63', [-20.14, -0.18, -333.17], [0, 0, 0], [2.5, 0.96, 32]);
        a.re('P64', [-20.91, -0.18, -314.14], [0, 0, 0], [0.92, 0.96, 1.26]);
        a.re('P65', [-19.28, -0.18, -316.66], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P66', [-19.28, -0.18, -306.58], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P67', [-20.07, -0.18, -315.4], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P68', [-20.07, -0.18, -310.36], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('P69', [-19.28, -0.18, -309.1], [0, 0, 0], [0.78, 0.96, 1.26]);
        a.re('Y1', [-20.14, 1.38, -347.89], [0, 0, 0], [2.16, 2.8, 2.16]);
        a.re('P70', [-21.41, -0.11, -292.79], [0, 0, 0], [5, 1.66, 5]);
        a.re('Y2', [-22.73, 2.7, -347.89], [0, 0, 0], [2.16, 6.22, 2.16]);
        a.re('Y3', [-17.56, 2.7, -347.89], [0, 0, 0], [2.16, 6.22, 2.16]);
        a.re('Y4', [-20.14, 4.6, -347.89], [0, 0, 0], [2.16, 2.4, 2.16]);
        a.re('P71', [4.49, 4.04, -148.28], [0, 0, 0], [3.12, 0.36, 0.36]);
        a.re('Y5', [-0.5, 4.14, -89.59], [0, -1.57, 0], [3, 0.4, 3]);
        a.re('P72', [-1.58, 4.14, -89.59], [0, 0, -0.79], [1, 0.2, 0.44]);
        a.re('P73', [-2.15, 4.14, -89.59], [0, 0, 0.79], [1, 0.2, 0.44]);
        a.re('P74', [0.54, 4.14, -89.59], [0, 0, -3.93], [1, 0.2, 0.44]);
        a.re('P75', [1.11, 4.14, -89.59], [0, 0, -2.36], [1, 0.2, 0.44]);
        a.re('P76', [1.13, 3.55, -148.28], [0, 0, 0.79], [1.8, 0.36, 0.36]);
        a.re('P77', [1.13, 4.57, -148.28], [0, 0, -0.79], [1.8, 0.36, 0.36]);
        a.re('P78', [3.45, 3.55, -148.28], [0, 0, -3.93], [1.8, 0.36, 0.36]);
        a.re('P79', [3.45, 4.57, -148.28], [0, 0, -2.36], [1.8, 0.36, 0.36]);
        a.re('P80', [-0.03, 4.04, -148.28], [0, 0, 0], [3.12, 0.36, 0.36]);
        a.re('P81', [-12.67, -0.18, -518.31], [0, 0, 0], [4.2, 4.56, 351.62]);
        a.re('P82', [-15.51, -0.18, -518.31], [0, 0, 0], [6.84, 0.96, 351.62]);
        a.re('P83', [-21.21, -0.18, -680.09], [-0.16, 0, 0], [6.84, 4.56, 25.52]);
        a.re('E0', [-20.14, 1.3, -347.89], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-14.89, 0, -691.67], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}