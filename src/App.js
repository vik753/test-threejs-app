import React from "react";
import * as THREE from "three";
import "./App.scss";
import { OrbitControls } from "./vendors/orbitsControl";
import UuidLabel from "./components/UuidLabel";

function App() {
  const [figure, setFigure] = React.useState("cylinder");
  const [figures, setFigures] = React.useState({});
  const [scale, setScale] = React.useState(1);
  const [uuidLabels, setUuidLabel] = React.useState({});
  const [sceneWidth, setSceneWidth] = React.useState(600);
  const [sceneHeight, setSceneHeight] = React.useState(400);

  const wrapper = React.useRef({});
  const uuidWrapper = React.useRef({});
  const scene = React.useRef({});
  const light = React.useRef({});
  const camera = React.useRef({});
  const renderer = React.useRef({});
  const orbitsControl = React.useRef({});

  const init = () => {
    scene.current = new THREE.Scene();
    scene.current.background = new THREE.Color(0x333333);

    light.current = new THREE.DirectionalLight(0xffffff);
    light.current.position.set(-1, 2, 2);
    scene.current.add(light.current);

    camera.current = new THREE.PerspectiveCamera(
      75,
      wrapper.current.clientWidth / wrapper.current.clientHeight,
      0.01,
      100
    );
    camera.current.position.set(5, 5, 10);

    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(
      wrapper.current.clientWidth,
      wrapper.current.clientHeight
    );
    wrapper.current.appendChild(renderer.current.domElement);

    orbitsControl.current = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );
  };

  const animate = () => {
    renderer.current.render(scene.current, camera.current);
    requestAnimationFrame(animate);
    orbitsControl.current.update();
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth, window.innerHeight);
      setSceneWidth((state) => window.innerWidth);
      setSceneHeight((state) => window.innerHeight);
    });
    init();
    animate();
  }, []);

  React.useEffect(() => {
    document.querySelector(".scene-wrapper").innerHTML = "";
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth, window.innerHeight);
      setSceneWidth((state) => window.innerWidth);
      setSceneHeight((state) => window.innerHeight);
    });
    init();
    animate();
    Object.values(figures).forEach((fig) => {
      scene.current.add(fig);
    });
  }, [sceneWidth, sceneHeight]);

  const onChangeFiguresSelector = (e) => {
    const value = e.target.value;
    setFigure(() => value);
  };

  const onChangeScale = (e) => {
    const value = +e.target.value;
    setScale(() => value);
  };

  const deleteFigureHandler = (uuid) => {
    const object = scene.current.getObjectByProperty("uuid", uuid);
    object.geometry.dispose();
    object.material.dispose();
    scene.current.remove(object);

    setUuidLabel((state) => {
      const newState = { ...state };
      delete newState[uuid];
      return { ...newState };
    });
  };

  const createUuidLabel = (uuid, name, uuidLabels, deleteFigureHandler) => {
    return (
      <UuidLabel
        key={uuid}
        uuid={uuid}
        name={name}
        uuidLabels={uuidLabels}
        deleteFigureHandler={deleteFigureHandler}
      />
    );
  };

  const createCylinder = () => {
    const geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 0.5, 20);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({
      color: 0x44aa88,
      // wireframe: true,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    //uuid
    const uuid = cylinder.uuid;
    const btn = createUuidLabel(
      uuid,
      "Cylinder",
      uuidLabels,
      deleteFigureHandler
    );
    setUuidLabel((state) => {
      return {
        ...state,
        [uuid]: btn,
      };
    });

    cylinder.position.x = Math.floor(Math.random() * 5);
    cylinder.position.y = Math.floor(Math.random() * 5);
    cylinder.position.z = Math.floor(Math.random() * 5);
    scene.current.add(cylinder);
    setFigures((state) => ({ ...state, [uuid]: cylinder }));
  };

  const createBox = () => {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const box = new THREE.Mesh(geometry, material);
    const uuid = box.uuid;

    const btn = createUuidLabel(uuid, "Box", uuidLabels, deleteFigureHandler);
    setUuidLabel((state) => {
      return {
        ...state,
        [uuid]: btn,
      };
    });

    box.position.x = Math.floor(Math.random() * 5);
    box.position.y = Math.floor(Math.random() * 5);
    box.position.z = Math.floor(Math.random() * 5);
    scene.current.add(box);
    setFigures((state) => ({ ...state, [uuid]: box }));
  };

  const createSphere = () => {
    const geometry = new THREE.SphereGeometry(0.5, 20, 20);
    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const sphere = new THREE.Mesh(geometry, material);
    const uuid = sphere.uuid;

    const btn = createUuidLabel(
      uuid,
      "Sphere",
      uuidLabels,
      deleteFigureHandler
    );
    setUuidLabel((state) => {
      return {
        ...state,
        [uuid]: btn,
      };
    });

    sphere.position.x = Math.floor(Math.random() * 5);
    sphere.position.y = Math.floor(Math.random() * 5);
    sphere.position.z = Math.floor(Math.random() * 5);
    scene.current.add(sphere);
    setFigures((state) => ({ ...state, [uuid]: sphere }));
  };

  const createFigureHandler = () => {
    switch (figure) {
      case "cylinder":
        createCylinder();
        break;
      case "box":
        createBox();
        break;
      case "sphere":
        createSphere();
        break;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="figure">Choose a figure </label>
        <select name="figures" id="figures" onChange={onChangeFiguresSelector}>
          <option value="cylinder">Cylinder</option>
          <option value="box">Box</option>
          <option value="sphere">Sphere</option>
        </select>
        <br />
        <label htmlFor="">Scale </label>
        <input
          id="scale"
          type="number"
          min="1"
          max="10"
          defaultValue={scale}
          onChange={onChangeScale}
        />
        <br />
        <button onClick={() => createFigureHandler(scene)}>Create</button>
      </div>
      <div className="scene-wrapper" ref={wrapper} />
      <div className="uuid-wrapper" ref={uuidWrapper}>
        {Object.values(uuidLabels)}
      </div>
    </div>
  );
}

export default App;
