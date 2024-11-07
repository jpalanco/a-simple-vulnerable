use std::process::Command;
use std::str;
use warp::Filter;

#[tokio::main]
async fn main() {
    // POST /run-command with JSON body {"command": "some_command"}
    let run_command = warp::post()
        .and(warp::path("run-command"))
        .and(warp::body::json())
        .map(|body: serde_json::Value| {
            let user_command = body["command"].as_str().unwrap_or("");

            // Vulnerability: Directly using user input in a system command
            let output = Command::new("sh")
                .arg("-c")
                .arg(user_command)
                .output()
                .expect("failed to execute command");

            if output.status.success() {
                let stdout = str::from_utf8(&output.stdout).unwrap();
                format!("Command output: {}", stdout)
            } else {
                let stderr = str::from_utf8(&output.stderr).unwrap();
                format!("Command failed: {}", stderr)
            }
        });

    warp::serve(run_command).run(([127, 0, 0, 1], 3030)).await;
}

