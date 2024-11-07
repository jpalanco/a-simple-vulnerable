defmodule VulnerableElixirApp.MixProject do
  use Mix.Project

  def project do
    [
      app: :vulnerable_elixir_app,
      version: "0.1.0",
      elixir: "~> 1.10",
      deps: deps()
    ]
  end

  defp deps do
    [
      {:phoenix, "~> 1.2.0"},
      {:ecto, "~> 2.0"},
      {:plug, "~> 1.3.0"}
    ]
  end
end

