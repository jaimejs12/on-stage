import { useState } from "react";
import { Search, Plus, Calendar, MapPin, Music } from "lucide-react";

export function AddScreen() {
  const [searchMode, setSearchMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    artist: "",
    date: "",
    time: "",
    venue: "",
    city: "",
  });

  const suggestedConcerts = [
    {
      id: "1",
      artist: "Coldplay",
      date: "10 Mar 2026",
      venue: "Estadio Wanda Metropolitano",
      city: "Madrid",
    },
    {
      id: "2",
      artist: "Ed Sheeran",
      date: "25 Mar 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
    },
    {
      id: "3",
      artist: "Rosalía",
      date: "15 Abr 2026",
      venue: "WiZink Center",
      city: "Madrid",
    },
  ];

  const filteredSuggestions = suggestedConcerts.filter(
    (concert) =>
      searchQuery === "" ||
      concert.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddExisting = (concert: any) => {
    // Simulación de añadir concierto
    alert(`✓ Añadido: ${concert.artist} - ${concert.date}`);
  };

  const handleSubmitManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.artist && formData.date && formData.venue && formData.city) {
      alert(
        `✓ Concierto añadido: ${formData.artist} - ${formData.date} en ${formData.venue}`
      );
      setFormData({
        artist: "",
        date: "",
        time: "",
        venue: "",
        city: "",
      });
    }
  };

  return (
    <div className="pb-24 pt-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground mb-1">Añadir concierto</h1>
        <p className="text-muted-foreground text-sm">
          Busca un concierto existente o añádelo manualmente
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSearchMode(true)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
            searchMode
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-secondary text-secondary-foreground border-border hover:border-muted-foreground/30"
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Buscar existente</span>
        </button>
        <button
          onClick={() => setSearchMode(false)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
            !searchMode
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-secondary text-secondary-foreground border-border hover:border-muted-foreground/30"
          }`}
        >
          <Plus className="w-4 h-4" />
          <span>Añadir manual</span>
        </button>
      </div>

      {/* Search Mode */}
      {searchMode ? (
        <div>
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar concierto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
            />
          </div>

          {/* Results */}
          <div className="space-y-3">
            {filteredSuggestions.length > 0 ? (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  Conciertos disponibles
                </p>
                {filteredSuggestions.map((concert) => (
                  <div
                    key={concert.id}
                    className="bg-card rounded-xl p-4 border border-border hover:border-muted-foreground/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-foreground mb-2">
                          {concert.artist}
                        </h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{concert.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>
                              {concert.venue} · {concert.city}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddExisting(concert)}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-all"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <Music className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-foreground mb-2">
                  No encontramos ese concierto
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Puedes añadirlo manualmente
                </p>
                <button
                  onClick={() => setSearchMode(false)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                >
                  Añadir manualmente
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-sm">
                  Comienza a buscar un concierto
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Manual Add Form */
        <form onSubmit={handleSubmitManual} className="space-y-4">
          <div>
            <label className="block text-sm text-foreground mb-2">
              Artista / Grupo *
            </label>
            <input
              type="text"
              required
              value={formData.artist}
              onChange={(e) =>
                setFormData({ ...formData, artist: e.target.value })
              }
              placeholder="Ej: Arctic Monkeys"
              className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-foreground mb-2">
                Fecha *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">Hora</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-foreground mb-2">Sala *</label>
            <input
              type="text"
              required
              value={formData.venue}
              onChange={(e) =>
                setFormData({ ...formData, venue: e.target.value })
              }
              placeholder="Ej: WiZink Center"
              className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="block text-sm text-foreground mb-2">
              Ciudad *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              placeholder="Ej: Madrid"
              className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all mt-6"
          >
            Guardar concierto
          </button>
        </form>
      )}
    </div>
  );
}
