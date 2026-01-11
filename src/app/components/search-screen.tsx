import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ConcertCard } from "./concert-card";

interface SearchFilters {
  artist: string;
  venue: string;
  city: string;
  date: string;
}

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    artist: "",
    venue: "",
    city: "",
    date: "",
  });

  const allConcerts = [
    {
      id: "1",
      artist: "Arctic Monkeys",
      date: "15 Ene 2026",
      venue: "WiZink Center",
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4MDE5MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
      friendsGoing: 3,
    },
    {
      id: "2",
      artist: "Billie Eilish",
      date: "18 Ene 2026",
      venue: "Estadio Santiago Bernabéu",
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY3OTkwMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: true,
    },
    {
      id: "3",
      artist: "The 1975",
      date: "22 Ene 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
      image: "https://images.unsplash.com/photo-1710951403189-4ddcabb7df65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2Nzk5NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
      friendsGoing: 1,
    },
    {
      id: "4",
      artist: "Bad Bunny",
      date: "28 Ene 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
      image: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkanxlbnwxfHx8fDE3Njc5OTkxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: true,
    },
  ];

  const filteredConcerts = allConcerts.filter((concert) => {
    const matchesSearch =
      searchQuery === "" ||
      concert.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (filters.artist === "" ||
        concert.artist.toLowerCase().includes(filters.artist.toLowerCase())) &&
      (filters.venue === "" ||
        concert.venue.toLowerCase().includes(filters.venue.toLowerCase())) &&
      (filters.city === "" ||
        concert.city.toLowerCase().includes(filters.city.toLowerCase()));

    return matchesSearch && matchesFilters;
  });

  const clearFilters = () => {
    setFilters({
      artist: "",
      venue: "",
      city: "",
      date: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <div className="pb-24 pt-6">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-foreground mb-1">Buscar</h1>
        <p className="text-muted-foreground text-sm">
          Encuentra tu próximo concierto
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar artista, sala o ciudad..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-12 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filters Button */}
      <div className="px-4 mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            hasActiveFilters
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-secondary text-secondary-foreground border-border hover:border-muted-foreground/30"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filtros</span>
          {hasActiveFilters && (
            <span className="ml-1 bg-primary-foreground/20 px-2 py-0.5 rounded-full text-xs">
              {Object.values(filters).filter((v) => v !== "").length}
            </span>
          )}
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="px-4 mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-card rounded-lg p-4 border border-border space-y-3">
            <input
              type="text"
              placeholder="Artista / Grupo"
              value={filters.artist}
              onChange={(e) =>
                setFilters({ ...filters, artist: e.target.value })
              }
              className="w-full px-3 py-2 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm"
            />
            <input
              type="text"
              placeholder="Sala"
              value={filters.venue}
              onChange={(e) => setFilters({ ...filters, venue: e.target.value })}
              className="w-full px-3 py-2 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm"
            />
            <input
              type="text"
              placeholder="Ciudad"
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="w-full px-3 py-2 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm"
            />
            <input
              type="text"
              placeholder="Fecha (ej: Ene 2026)"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="w-full px-3 py-2 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm"
            />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="px-4">
        {filteredConcerts.length > 0 ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              {filteredConcerts.length} resultado
              {filteredConcerts.length !== 1 ? "s" : ""}
            </p>
            {filteredConcerts.map((concert) => (
              <ConcertCard key={concert.id} {...concert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-foreground mb-2">No se encontraron conciertos</p>
            <p className="text-muted-foreground text-sm">
              Intenta con otros términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
