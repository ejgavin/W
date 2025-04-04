var map = {
    title: "Unsettled Blocks",
    song: "env2",
    maker: "MooshMM",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00007, -6.38993, -124.91993], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, true, false);
        a.p([0.00014, -6.38986, -82.74986], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, false, false);
        a.p([0.00021, -6.38979, -26.34979], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, false, false);
        a.p([0.00049, -6.38951, -176.25951], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, false, false);
        a.p([0.00007, -6.38993, -344.54993], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, false, false);
        a.p([16.24021, -6.38979, -387.15979], [0, 0, 0], [9.42, 1.38, 74.22], "22b399", 0, 0, 0.6, false, false);
        a.p([0.00035, -6.38965, -424.14965], [0, 0, 0], [9.42, 1.38, 51.38], "22b399", 0, 0, 0.6, false, false);
        a.e([0.00049, -9.57951, -446.69951]);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P6');
        cc.set_monkey("steer", default_steer * 2.0);
        cc.set_monkey("speed", default_speed * 1.3);
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#457345"));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -2.469719999999999) {
                    steer = default_steer * 2.0;
                    speed = default_speed * 1.3;
                    a.msg_set("Beware: All blocks will move ");
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P2', 'x', 0.125);
                if (PZ < -62.14972) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -62.159580000000005) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.rot('P0', 'y', -0.75);
                a.rot('P1', 'y', 0.75);
                if (PZ < -162.81958) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -162.82999999999998) {
                    steer = default_steer * 3.3;
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('P3', 'z', -0.75);
                a.rot('P3', 'y', 0.25);
                if (PZ < -318.99) {
                    steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -329.89986000000005) {
                    steer = default_steer * 2.0;
                    speed = default_speed * 1.3;
                    this.section_id += 1
                }
                break;
            case 7:
                a.rot('P4', 'z', 0.75);
                if (PZ < -370.69986) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -383.53972000000005) {
                    steer = default_steer * 2.0;
                    speed = default_speed * 1.3;
                    this.section_id += 1
                }
                break;
            case 9:
                a.rot('P5', 'z', -0.75);
                if (PZ < -424.33972) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -424.41965) {
                    steer = default_steer * 2.0;
                    speed = default_speed * 1.3;
                    this.section_id += 1
                }
                break;
            case 11:
                a.rot('P6', 'x', -0.1);
                if (PZ < -446.35965000000004) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00007, -6.38993, -124.91993], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('P1', [0.00014, -6.38986, -82.74986], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('P2', [0.00021, -6.38979, -26.34979], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('P3', [0.00049, -6.38951, -176.25951], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('P4', [0.00007, -6.38993, -344.54993], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('P5', [16.24021, -6.38979, -387.15979], [0, 0, 0], [9.42, 1.38, 74.22]);
        a.re('P6', [0.00035, -6.38965, -424.14965], [0, 0, 0], [9.42, 1.38, 51.38]);
        a.re('E0', [0.00049, -9.57951, -446.69951], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}