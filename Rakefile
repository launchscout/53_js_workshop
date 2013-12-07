desc "build the labs"
task :build_labs do
    require 'json'
    labs = JSON(Dir['tasks/*/*'].sort.inject({}) { |sections, path|
        section, task = path.split('/')[1..2]
        sections[section] ||= {:name => section, :tasks => []}

        description, code = File.readlines(path).join.split(/^--$/m).
          collect { |text| text.strip }[0..1]

        sections[section][:tasks].push({
          :name => task,
          :description => description || '',
          :code => code || ''
        })
        sections
    }.values.sort_by {|section| section[:name] })
    File.open("js/tasks.js", "w") { |f| f.puts labs }
end