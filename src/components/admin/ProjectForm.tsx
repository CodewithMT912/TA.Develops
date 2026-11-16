
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  technologies: string[] | null;
  status: string;
  featured: boolean;
  display_order: number;
  preview: string | null;
  project_type: string | null;
};

type ProjectFormProps = {
  project?: Project | null;
};

export default function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const projectData = {
      name: String(formData.get("name") || "").trim(),
      category: String(formData.get("category") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      image_url: String(formData.get("image_url") || "").trim() || null,
      live_url: String(formData.get("live_url") || "").trim() || null,
      github_url: String(formData.get("github_url") || "").trim() || null,
      technologies: String(formData.get("technologies") || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      status: String(formData.get("status") || "Coming Soon"),
      featured: formData.get("featured") === "on",
      display_order: Number(formData.get("display_order") || 0),
      preview: String(formData.get("preview") || "").trim() || null,
      project_type: String(formData.get("project_type") || "").trim() || null,
      updated_at: new Date().toISOString(),
    };

    if (
      !projectData.name ||
      !projectData.category ||
      !projectData.description
    ) {
      setError("Please complete the project name, category and description.");
      setSaving(false);
      return;
    }

    const result = project
      ? await supabase
          .from("projects")
          .update(projectData)
          .eq("id", project.id)
      : await supabase.from("projects").insert(projectData);

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    router.push("/admin/projects");
    router.refresh();
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      {error && <div className="project-form-error">{error}</div>}

      <div className="project-form-grid">
        <label className="project-form-field">
          Project Name *
          <input
            name="name"
            defaultValue={project?.name || ""}
            placeholder="e.g. Beyond the Beauty"
            required
          />
        </label>

        <label className="project-form-field">
          Category *
          <input
            name="category"
            defaultValue={project?.category || ""}
            placeholder="e.g. E-commerce Website"
            required
          />
        </label>

        <label className="project-form-field">
          Project Type
          <input
            name="project_type"
            defaultValue={project?.project_type || ""}
            placeholder="e.g. E-commerce"
          />
        </label>

        <label className="project-form-field">
          Status *
          <select name="status" defaultValue={project?.status || "Coming Soon"}>
            <option value="Live">Live</option>
            <option value="In Progress">In Progress</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>
        </label>

        <label className="project-form-field project-form-full">
          Description *
          <textarea
            name="description"
            defaultValue={project?.description || ""}
            placeholder="Describe this project..."
            rows={5}
            required
          />
        </label>

        <label className="project-form-field project-form-full">
          Project Image URL
          <input
            name="image_url"
            type="url"
            defaultValue={project?.image_url || ""}
            placeholder="https://example.com/image.png"
          />
        </label>

        <label className="project-form-field">
          Live Website URL
          <input
            name="live_url"
            type="url"
            defaultValue={project?.live_url || ""}
            placeholder="https://example.com"
          />
        </label>

        <label className="project-form-field">
          GitHub URL
          <input
            name="github_url"
            type="url"
            defaultValue={project?.github_url || ""}
            placeholder="https://github.com/..."
          />
        </label>

        <label className="project-form-field project-form-full">
          Technologies
          <input
            name="technologies"
            defaultValue={project?.technologies?.join(", ") || ""}
            placeholder="Next.js, React, Supabase, CSS"
          />
          <small>Separate each technology with a comma.</small>
        </label>

        <label className="project-form-field">
          Preview Style
          <input
            name="preview"
            defaultValue={project?.preview || ""}
            placeholder="e.g. beauty, sanitary, agency"
          />
        </label>

        <label className="project-form-field">
          Display Order
          <input
            name="display_order"
            type="number"
            defaultValue={project?.display_order ?? 0}
          />
        </label>
      </div>

      <label className="project-form-checkbox">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={project?.featured || false}
        />
        <span>Feature this project on the portfolio</span>
      </label>

      <div className="project-form-actions">
        <button
          type="button"
          className="project-form-cancel"
          onClick={() => router.push("/admin/projects")}
        >
          Cancel
        </button>

        <button type="submit" className="project-form-submit" disabled={saving}>
          {saving
            ? "Saving..."
            : project
            ? "Save Changes"
            : "Create Project"}
        </button>
      </div>
    </form>
  );
}
