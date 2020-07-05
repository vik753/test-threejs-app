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
  const [color, setColor] = React.useState("#4754ff");

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
    camera.current.position.set(10, 10, 15);

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

  // effect on sceneWidth, sceneHeight
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

  const createFigureHandler = (name) => {
    const cylinderGeometry = new THREE.CylinderBufferGeometry(
      0.5,
      0.5,
      0.5,
      20
    );
    const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const sphereGeometry = new THREE.SphereGeometry(0.5, 20, 20);
    let geometry;

    switch (name) {
      case "cylinder":
        geometry = cylinderGeometry;
        break;
      case "box":
        geometry = boxGeometry;
        break;
      case "sphere":
        geometry = sphereGeometry;
        break;
    }

    geometry.scale(scale, scale, scale);
    const material = new THREE.MeshPhongMaterial({
      color,
      // wireframe: true,
    });
    const figure = new THREE.Mesh(geometry, material);
    //uuid
    const uuid = figure.uuid;
    const btn = createUuidLabel(uuid, name, uuidLabels, deleteFigureHandler);
    setUuidLabel((state) => {
      return {
        ...state,
        [uuid]: btn,
      };
    });

    figure.position.x = Math.floor(Math.random() * 10);
    figure.position.y = Math.floor(Math.random() * 10);
    figure.position.z = Math.floor(Math.random() * 10);
    scene.current.add(figure);
    setFigures((state) => ({ ...state, [uuid]: figure }));
  };

  const colorPickerHandler = (e) => {
    const color = e.target.value;
    if (color) {
      setColor(() => color);
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
        <label htmlFor="favcolor">Select color: </label>
        <input
          id="favcolor"
          type="color"
          defaultValue={color}
          onChange={colorPickerHandler}
        />
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
        <button onClick={() => createFigureHandler(figure)}>Create</button>
      </div>
      <div className="scene-wrapper" ref={wrapper} />
      <div className="uuid-wrapper" ref={uuidWrapper}>
        {Object.values(uuidLabels)}
      </div>
    </div>
  );
}

export default App;
