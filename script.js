document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const activityType = document.getElementById('activity-type').value;
    const imageFile = document.getElementById('image-upload').files[0];

    if (!activityType || !imageFile) {
        alert('Please select an activity type and upload an image.');
        return;
    }

    analyzeImage(activityType, imageFile);
});

function analyzeImage(activityType, imageFile) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Analyzing the ${activityType}...`;

    setTimeout(() => {
        resultDiv.innerHTML = `<strong>Result:</strong> The stage of construction is in its early phase of ${activityType}.`;
        render3DModel();
    }, 2000); // Simulated delay
}

function render3DModel() {
    const canvas = document.getElementById('3d-model');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();
}

document.getElementById('generate-historic-report').addEventListener('click', function() {
    const historicReportDiv = document.getElementById('historic-report');
    historicReportDiv.innerHTML = "Comparing with previous records, the construction progress is up by 15% over the last 2 weeks.";
});

document.getElementById('generate-automation-report').addEventListener('click', function() {
    const automationReportDiv = document.getElementById('automation-report');
    automationReportDiv.innerHTML = "Automation Report: Automated checks suggest that the current phase aligns with the project timeline.";
});

document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('support-question').value;
    const responseDiv = document.getElementById('support-response');

    setTimeout(() => {
        responseDiv.innerHTML = `<strong>Support Response:</strong> We received your question: "${question}". Our team will respond shortly.`;
    }, 1000); // Simulated delay
});
