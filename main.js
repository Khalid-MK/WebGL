main();

function main() {
  var canvas = document.querySelector("canvas");
  var gl = canvas.getContext("webgl");

  if (!gl) {
    alert("Browser not supported!");
  }

  const program = gl.createProgram();
  const vertex_shader = createShader(
    gl,
    gl.VERTEX_SHADER,
    readFile("vertex_shader.glsl")
  );
  gl.attachShader(program);
}

function createShader(gl, shaderType, shaderSource) {
  const shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "error occured while compiling shader " + gl.getShaderInfoLog(shader)
    );
  }

  return shader;
}
